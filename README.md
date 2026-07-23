# AURA — Panel de la Consulta

Panel interno demo para la consulta de la **Dra. Macarena Fontecilla**.

> AURA propone · usted aprueba

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Recharts
- Datos mock en `data/mock.ts` + `data/extended.ts` (simulados desde Google Sheets)

## Módulos

1. **Centro de Mando** — KPIs, agenda, aprobaciones, **AURA lee el panel** (voz ElevenLabs + herramientas que leen datos de la página), gráficos, inactivos
2. **Acciones & Tareas** — tableros diaria / semanal / mensual
3. **Pacientes & Predicción** — lealtad, riesgo, leads
4. **KPIs & Simulador** — benchmarks + simulador de impacto
5. **Crecimiento Digital** — redes desde cero, 90 días, heatmap, plan de contenido

## Desarrollo

```bash
npm install
cp .env.example .env.local   # ELEVENLABS_API_KEY + NEXT_PUBLIC_ELEVENLABS_AGENT_ID
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) — pensado para demo a 1440px.

En **Centro de Mando**, el widget **AURA lee el panel** inicia una conversación de voz. Al conectar, inyecta el snapshot del dashboard y expone tools del cliente (`get_panel_data`, `get_page_text`, `make_conclusiones`). También puede generar conclusiones + TTS sin llamada en vivo.

En Vercel configure `ELEVENLABS_API_KEY` (servidor) y `NEXT_PUBLIC_ELEVENLABS_AGENT_ID`. Nunca suba la API key al cliente.

Para que el agente *llame* las tools por su cuenta, defínalas con los mismos nombres en el panel de ElevenLabs (Client tools). Aunque no estén configuradas, AURA igual recibe el contexto del panel al iniciar.