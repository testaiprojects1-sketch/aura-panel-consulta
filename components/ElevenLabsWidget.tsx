"use client";

import Script from "next/script";
import type { HTMLAttributes } from "react";

interface ElevenLabsWidgetProps {
  className?: string;
}

type ElevenLabsConvaiProps = HTMLAttributes<HTMLElement> & {
  "agent-id"?: string;
  variant?: string;
  dismissible?: string;
};

function ElevenLabsConvai(props: ElevenLabsConvaiProps) {
  return <elevenlabs-convai {...props} />;
}

/** Agent de demo AURA — override con NEXT_PUBLIC_ELEVENLABS_AGENT_ID si hace falta. */
const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID?.trim() ||
  "agent_9601ky60er25e1hvws6z80q4n24s";

/** ElevenLabs Conversational AI embed (ConvAI widget). */
export default function ElevenLabsWidget({ className = "" }: ElevenLabsWidgetProps) {
  return (
    <section
      className={`rounded-lg border border-line bg-white p-4 shadow-card ${className}`}
      aria-label="Asistente de voz AURA"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-teal">
            Asistente de voz
          </p>
          <h2 className="mt-1 text-[14px] font-medium text-ink">
            Widget ElevenLabs
          </h2>
          <p className="mt-1.5 max-w-sm text-[12px] leading-relaxed text-muted">
            Hable con AURA por voz: agenda, aprobaciones y seguimientos. Use el
            botón flotante de la esquina para iniciar la conversación.
          </p>
        </div>
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-teal/50 bg-teal/10 text-teal"
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
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        <p className="text-[11px] text-muted">
          Estado: conectado · agent {AGENT_ID.slice(0, 18)}…
        </p>
      </div>

      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
      <ElevenLabsConvai agent-id={AGENT_ID} />
    </section>
  );
}
