"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import {
  ConversationProvider,
  useConversation,
} from "@elevenlabs/react";
import {
  buildConclusiones,
  snapshotToPlainContext,
  type DashboardSnapshot,
} from "@/lib/conclusiones";

interface ElevenLabsAgentWidgetProps {
  snapshot: DashboardSnapshot;
  className?: string;
}

const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID?.trim() ||
  "agent_1001ky62xg8wfpmrg3n2zmyy2p9v";

function readVisiblePageText(): string {
  if (typeof document === "undefined") return "";
  const main = document.querySelector("main");
  const root = main ?? document.body;
  const text = (root?.innerText ?? "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+/g, " ")
    .trim();
  return text.slice(0, 6000);
}

function AgentPanel({
  snapshot,
  className = "",
}: ElevenLabsAgentWidgetProps) {
  const snapshotRef = useRef(snapshot);
  snapshotRef.current = snapshot;

  const [error, setError] = useState<string | null>(null);
  const [lastTool, setLastTool] = useState<string | null>(null);
  const [conclusionesText, setConclusionesText] = useState<string | null>(null);
  const [mode, setMode] = useState<"listening" | "speaking" | "idle">("idle");

  const clientTools = useMemo(
    () => ({
      get_panel_data: async () => {
        setLastTool("get_panel_data");
        const s = snapshotRef.current;
        return snapshotToPlainContext(s);
      },
      get_page_text: async () => {
        setLastTool("get_page_text");
        const text = readVisiblePageText();
        return text || "No hay texto visible en la página.";
      },
      make_conclusiones: async () => {
        setLastTool("make_conclusiones");
        const text = buildConclusiones(snapshotRef.current);
        setConclusionesText(text);
        return text;
      },
    }),
    []
  );

  const conversation = useConversation({
    clientTools,
    onError: (message) => {
      setError(typeof message === "string" ? message : "Error de conversación");
    },
    onModeChange: ({ mode: next }) => {
      if (next === "speaking" || next === "listening") {
        setMode(next);
      } else {
        setMode("idle");
      }
    },
  });

  const connected = conversation.status === "connected";
  const connecting = conversation.status === "connecting";

  const start = useCallback(async () => {
    setError(null);
    setLastTool(null);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setError("Permita el micrófono para hablar con AURA.");
      return;
    }

    const s = snapshotRef.current;
    const contextBlock = snapshotToPlainContext(s);
    const conclusiones = buildConclusiones(s);
    setConclusionesText(conclusiones);

    const promptExtra = [
      "Eres AURA, asistente de la consulta de la Dra. Macarena Fontecilla en Vitacura.",
      "Hablas en español chileno, formal de usted, breve y accionable.",
      "Puedes llamar herramientas del cliente: get_panel_data, get_page_text, make_conclusiones.",
      "Cuando el usuario pida un resumen o conclusiones, llama make_conclusiones o usa los datos del contexto.",
      "Datos actuales del panel (contexto):",
      contextBlock,
    ].join("\n");

    try {
      const authRes = await fetch("/api/elevenlabs/signed-url");
      const auth = (await authRes.json()) as {
        signedUrl?: string;
        agentId?: string;
        fallbackAgentId?: string;
        error?: string;
      };

      const sessionBase = {
        onConnect: () => {
          conversation.sendContextualUpdate(
            `Contexto del panel AURA (vivo):\n${contextBlock}\n\nConclusiones preliminares:\n${conclusiones}`
          );
        },
        overrides: {
          agent: {
            prompt: { prompt: promptExtra },
            firstMessage:
              "Hola. Ya leí el panel de hoy. ¿Quiere que le diga las conclusiones prioritarias o prefiere preguntarme algo puntual?",
            language: "es",
          },
        },
      } as const;

      if (auth.signedUrl) {
        conversation.startSession({
          ...sessionBase,
          signedUrl: auth.signedUrl,
        });
      } else {
        conversation.startSession({
          ...sessionBase,
          agentId: auth.fallbackAgentId || auth.agentId || AGENT_ID,
        });
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo iniciar la sesión");
    }
  }, [conversation]);

  const stop = useCallback(() => {
    conversation.endSession();
    setMode("idle");
  }, [conversation]);

  const runTextConclusiones = useCallback(async () => {
    setError(null);
    const text = buildConclusiones(snapshotRef.current);
    setConclusionesText(text);
    try {
      const res = await fetch("/api/aura-conclusiones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ snapshot: snapshotRef.current }),
      });
      const data = (await res.json()) as {
        conclusiones?: string;
        audioBase64?: string | null;
        error?: string;
        ttsError?: string | null;
      };
      if (!res.ok) throw new Error(data.error || "Error al generar audio");
      if (data.conclusiones) setConclusionesText(data.conclusiones);
      if (data.audioBase64) {
        const audio = new Audio(`data:audio/mpeg;base64,${data.audioBase64}`);
        void audio.play().catch(() => undefined);
      } else if (data.ttsError) {
        setError(data.ttsError);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error TTS");
    }
  }, []);

  return (
    <section
      className={`rounded-lg border border-line bg-white p-4 shadow-card ${className}`}
      aria-label="Asistente AURA con lectura del panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-teal">
            Asistente de voz
          </p>
          <h2 className="mt-1 text-[14px] font-medium text-ink">
            AURA lee el panel
          </h2>
          <p className="mt-1.5 max-w-sm text-[12px] leading-relaxed text-muted">
            Conversación por voz con acceso a KPIs, agenda, aprobaciones y texto
            visible de la página. Puede pedirle conclusiones en vivo.
          </p>
        </div>
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
            connected
              ? "border-teal/50 bg-teal/10 text-teal"
              : "border-dashed border-teal/40 bg-teal/5 text-teal"
          }`}
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect
              x="7"
              y="3"
              width="6"
              height="10"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M4.5 9.5a5.5 5.5 0 0 0 11 0M10 15v2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg bg-paper px-3 py-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            connected ? "bg-success" : "bg-taupe"
          }`}
        />
        <p className="text-[11px] text-muted">
          {connected
            ? `En llamada · ${mode === "speaking" ? "AURA habla" : mode === "listening" ? "escuchando" : "activo"}${lastTool ? ` · tool: ${lastTool}` : ""}`
            : connecting
              ? "Conectando…"
              : "Listo · lee datos del panel al iniciar"}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {!connected ? (
          <button
            type="button"
            onClick={() => void start()}
            disabled={connecting}
            className="rounded-lg bg-teal px-3 py-2 text-[12px] font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {connecting ? "Conectando…" : "Hablar con AURA"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => stop()}
            className="rounded-lg border border-alert/40 bg-alert/5 px-3 py-2 text-[12px] font-medium text-alert"
          >
            Colgar
          </button>
        )}
        <button
          type="button"
          onClick={() => void runTextConclusiones()}
          className="rounded-lg border border-line px-3 py-2 text-[12px] font-medium text-teal hover:border-teal/40 hover:bg-teal/5"
        >
          Conclusiones + voz TTS
        </button>
      </div>

      {error && (
        <p className="mt-3 text-[12px] font-medium text-alert">{error}</p>
      )}

      {conclusionesText && (
        <pre className="mt-3 whitespace-pre-wrap rounded-lg border border-line bg-paper px-3 py-3 font-sans text-[12.5px] leading-relaxed text-ink">
          {conclusionesText}
        </pre>
      )}
    </section>
  );
}

/** Page-aware ElevenLabs agent — replaces the floating ConvAI embed. */
export default function ElevenLabsAgentWidget(props: ElevenLabsAgentWidgetProps) {
  return (
    <ConversationProvider>
      <AgentPanel {...props} />
    </ConversationProvider>
  );
}
