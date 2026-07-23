import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Signed URL for private/authenticated ElevenLabs ConvAI agents.
 * Uses server-only ELEVENLABS_API_KEY — never expose the key to the client.
 */
export async function GET() {
  const apiKey = process.env.ELEVENLABS_API_KEY?.trim();
  const agentId =
    process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID?.trim() ||
    process.env.ELEVENLABS_AGENT_ID?.trim();

  if (!apiKey) {
    return NextResponse.json(
      { error: "Falta ELEVENLABS_API_KEY en el servidor." },
      { status: 500 }
    );
  }
  if (!agentId) {
    return NextResponse.json(
      { error: "Falta NEXT_PUBLIC_ELEVENLABS_AGENT_ID." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${encodeURIComponent(agentId)}`,
      {
        headers: { "xi-api-key": apiKey },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      return NextResponse.json(
        {
          error: `ElevenLabs signed-url ${res.status}`,
          detail: detail.slice(0, 300),
          // Public agents can still use agentId on the client without signed URL
          fallbackAgentId: agentId,
        },
        { status: res.status }
      );
    }

    const data = (await res.json()) as { signed_url?: string };
    if (!data.signed_url) {
      return NextResponse.json(
        { error: "Respuesta sin signed_url", fallbackAgentId: agentId },
        { status: 502 }
      );
    }

    return NextResponse.json({
      signedUrl: data.signed_url,
      agentId,
    });
  } catch {
    return NextResponse.json(
      { error: "No se pudo obtener signed URL", fallbackAgentId: agentId },
      { status: 502 }
    );
  }
}
