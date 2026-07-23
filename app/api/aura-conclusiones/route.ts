import { NextResponse } from "next/server";
import {
  buildConclusiones,
  snapshotToPlainContext,
  type DashboardSnapshot,
} from "@/lib/conclusiones";

export const runtime = "nodejs";

const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // Sarah — multilingual español OK
const TTS_MODEL = "eleven_multilingual_v2";

function isSnapshot(value: unknown): value is DashboardSnapshot {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.fechaLabel === "string" &&
    typeof v.citasHoy === "number" &&
    Array.isArray(v.titulosAprobaciones)
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.ELEVENLABS_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: "Falta ELEVENLABS_API_KEY en el servidor." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const snapshot =
    body && typeof body === "object" && "snapshot" in body
      ? (body as { snapshot: unknown }).snapshot
      : body;

  if (!isSnapshot(snapshot)) {
    return NextResponse.json(
      { error: "Snapshot del panel incompleto." },
      { status: 400 }
    );
  }

  const conclusiones = buildConclusiones(snapshot);
  const context = snapshotToPlainContext(snapshot);

  // Texto para voz: más corto, sin numeración dura
  const speechText = conclusiones
    .replace(/^Dra\. Fontecilla[^\n]*\n*/, "Conclusiones AURA. ")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\n+/g, " ")
    .slice(0, 1200);

  let audioBase64: string | null = null;
  let ttsError: string | null = null;

  try {
    const ttsRes = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        body: JSON.stringify({
          text: speechText,
          model_id: TTS_MODEL,
          voice_settings: {
            stability: 0.45,
            similarity_boost: 0.75,
            style: 0.15,
          },
        }),
      }
    );

    if (!ttsRes.ok) {
      ttsError = `TTS ${ttsRes.status}`;
    } else {
      const buf = Buffer.from(await ttsRes.arrayBuffer());
      audioBase64 = buf.toString("base64");
    }
  } catch {
    ttsError = "No se pudo sintetizar audio.";
  }

  return NextResponse.json({
    conclusiones,
    contextUsed: context,
    audioBase64,
    ttsError,
    provider: "elevenlabs-tts + aura-panel-reader",
  });
}
