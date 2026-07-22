/**
 * =============================================================================
 * AURA — Fichas de agenda (detalle al clic)
 * =============================================================================
 * Simulación desde Google Sheets / ficha Dentalink. Cada paciente con cita
 * esta semana tiene historial, motivo de visita, oportunidades y notas.
 * =============================================================================
 */

import type { PacienteAgendaDetalle } from "@/types";

export const pacienteAgendaDetalles: Record<string, PacienteAgendaDetalle> = {
  p01: {
    pacienteId: "p01",
    tratamientoAnterior: "Evaluación digital de sonrisa + presupuesto #1044",
    fechaTratamientoAnterior: "2026-07-14",
    vienePor: "Sesión 1 de 3 del plan de diseño de sonrisa",
    podriaBeneficiarse: [
      "Blanqueamiento domiciliario entre sesiones",
      "Membresía de control semestral",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-07-14",
      detalle: "8 días desde el inicio del plan · saldo pendiente $180.000",
    },
    notas:
      "Prefiere WhatsApp por la mañana. Alérgica a penicilina (declarado). Muy motivada con el resultado.",
  },
  p02: {
    pacienteId: "p02",
    tratamientoAnterior: "Limpieza + radiografía bitewing",
    fechaTratamientoAnterior: "2026-06-02",
    vienePor: "Evaluación inicial de estética dental",
    podriaBeneficiarse: [
      "Carillas ultradelgadas en 4 anteriores",
      "Pack armonización labial suave",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2025-07-20",
      detalle: "Cumple 1 año como paciente esta semana",
    },
    notas: "Ejecutivo · agenda flexible después de las 17:00. Referido por F. Valdés.",
  },
  p03: {
    pacienteId: "p03",
    tratamientoAnterior: "Toxina botulínica frente y entrecejo",
    fechaTratamientoAnterior: "2026-01-15",
    vienePor: "Control post-tratamiento a 6 meses",
    podriaBeneficiarse: [
      "Retoque de toxina (ventana ideal)",
      "Hidratación labial con ácido hialurónico",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2026-01-15",
      detalle: "Control vencido hace ~6 meses · prioridad de reactivación",
    },
    notas: "Viaja mucho a Miami. Confirmar con 48 h de anticipación.",
  },
  p04: {
    pacienteId: "p04",
    tratamientoAnterior: "Cementación de carillas 11–21",
    fechaTratamientoAnterior: "2026-06-28",
    vienePor: "Sesión de plan · ajuste oclusal y fotos finales",
    podriaBeneficiarse: [
      "Blanqueamiento de posteriores para unificar tono",
      "Plan VIP de mantención anual",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-04-10",
      detalle: "Plan VIP en curso · LTV $2.100.000",
    },
    notas: "Paciente VIP. Prefiere sillón de la ventana. Esposa también es paciente.",
  },
  p05: {
    pacienteId: "p05",
    tratamientoAnterior: "Consulta de armonización facial",
    fechaTratamientoAnterior: "2026-05-20",
    vienePor: "Toxina botulínica (primera sesión)",
    podriaBeneficiarse: [
      "Protocolo de mantenimiento cada 4–5 meses",
      "Skinbooster en zona malar",
    ],
    aniversario: {
      tipo: "Cumpleaños",
      fecha: "2026-08-03",
      detalle: "Cumpleaños en 12 días · oportunidad de gift card consulta",
    },
    notas: "Canceló hoy · reasignar cupo. Ansiosa en primera aplicación; ir despacio.",
  },
  p06: {
    pacienteId: "p06",
    tratamientoAnterior: "Encerado digital + mock-up provisional",
    fechaTratamientoAnterior: "2026-07-05",
    vienePor: "Diseño de sonrisa · sesión de preparación",
    podriaBeneficiarse: [
      "Gingivoplastia mínima si aprueba mock-up",
      "Férula nocturna post-cementación",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-07-05",
      detalle: "17 días en plan activo · alta adherencia",
    },
    notas: "Bruxismo leve. Traer mock-up de laboratorio. Paga con transferencia.",
  },
  p07: {
    pacienteId: "p07",
    tratamientoAnterior: "Control de higiene + sellantes",
    fechaTratamientoAnterior: "2026-03-12",
    vienePor: "Sesión de plan estético (cara anterior)",
    podriaBeneficiarse: [
      "Blanqueamiento en consulta",
      "Contorno labial sutil",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2024-07-20",
      detalle: "2 años en la consulta · candidata a membresía",
    },
    notas: "Madre de dos · prefiere citas matinales. Muy puntual.",
  },
  p08: {
    pacienteId: "p08",
    tratamientoAnterior: "Ninguno en esta consulta (primera vez)",
    fechaTratamientoAnterior: "—",
    vienePor: "Evaluación inicial de estética dental y facial",
    podriaBeneficiarse: [
      "Paquete evaluación + fotos + plan digital",
      "Si hay apiñamiento leve: alineadores estéticos",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2026-07-22",
      detalle: "Primera visita hoy · alta prioridad de onboarding",
    },
    notas: "Llegó por Instagram. Quiere resultado natural, sin ‘sobretratamiento’.",
  },
  p09: {
    pacienteId: "p09",
    tratamientoAnterior: "Armonización de mentón",
    fechaTratamientoAnterior: "2026-04-02",
    vienePor: "Sesión de plan · revisión de proporciones",
    podriaBeneficiarse: [
      "Retoque de toxina en masaeteros",
      "Perfiloplastia conservadora",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2026-04-02",
      detalle: "3,5 meses desde última armonización",
    },
    notas: "Fotógrafa · cuida mucho el perfil. Traer fotos previas.",
  },
  p10: {
    pacienteId: "p10",
    tratamientoAnterior: "Blanqueamiento en consulta",
    fechaTratamientoAnterior: "2026-02-18",
    vienePor: "Sesión de plan de mantenimiento",
    podriaBeneficiarse: [
      "Kit de refuerzo domiciliario",
      "Control de sensibilidad",
    ],
    aniversario: {
      tipo: "Cumpleaños",
      fecha: "2026-07-28",
      detalle: "Cumpleaños en 6 días",
    },
    notas: "Sin respuesta a confirmación. Sensibilidad previa al blanqueamiento.",
  },
  p11: {
    pacienteId: "p11",
    tratamientoAnterior: "Carillas 12–22 (cementación)",
    fechaTratamientoAnterior: "2026-05-30",
    vienePor: "Control post-tratamiento a 7 semanas",
    podriaBeneficiarse: [
      "Ajuste de puntos de contacto",
      "Protocolo de higiene interdental específico",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-04-15",
      detalle: "Plan de carillas en fase de control",
    },
    notas: "Sin respuesta hoy 12:00. Si no confirma, llamar a las 11:30.",
  },
  p12: {
    pacienteId: "p12",
    tratamientoAnterior: "Injerto de tejido blando zona 24",
    fechaTratamientoAnterior: "2026-06-10",
    vienePor: "Control post-tratamiento",
    podriaBeneficiarse: [
      "Reevaluación estética de sonrisa gingival",
      "Mantenimiento periodontal trimestral",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2026-06-10",
      detalle: "6 semanas post-cirugía",
    },
    notas: "Cupo liberado (canceló). Reagendar preferente la próxima semana.",
  },
  p13: {
    pacienteId: "p13",
    tratamientoAnterior: "Ninguno en esta consulta (primera vez)",
    fechaTratamientoAnterior: "—",
    vienePor: "Evaluación inicial",
    podriaBeneficiarse: [
      "Diseño de sonrisa digital",
      "Si indica: toxina en frente para balance facial",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2026-07-24",
      detalle: "Primera visita el viernes",
    },
    notas: "Estudiante de derecho. Presupuesto consciente · ofrecer plan por etapas.",
  },
  p14: {
    pacienteId: "p14",
    tratamientoAnterior: "Consulta online de orientación",
    fechaTratamientoAnterior: "2026-07-01",
    vienePor: "Evaluación inicial presencial",
    podriaBeneficiarse: [
      "Pack evaluación + encerado digital",
      "Si hay bruxismo: férula + toxina masaetero",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2026-07-23",
      detalle: "Primera presencial tras lead de Google",
    },
    notas: "Lead Google Ads. Aún sin confirmar. Enviar recordatorio WhatsApp.",
  },
  p15: {
    pacienteId: "p15",
    tratamientoAnterior: "Limpieza + fluorización",
    fechaTratamientoAnterior: "2025-12-10",
    vienePor: "Sesión de plan estético",
    podriaBeneficiarse: [
      "Blanqueamiento + contorno",
      "Campaña de reactivación cumplida · reforzar vínculo",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2025-12-10",
      detalle: "7+ meses sin visita clínica completa",
    },
    notas: "Sábado 10:00. Viene con su madre (posible lead familiar).",
  },
  p16: {
    pacienteId: "p16",
    tratamientoAnterior: "Consulta de color y expectativas",
    fechaTratamientoAnterior: "2026-06-22",
    vienePor: "Blanqueamiento en consulta",
    podriaBeneficiarse: [
      "Cubiertas de mantenimiento 3 meses",
      "Evaluación de microabrasión si manchas persisten",
    ],
    aniversario: {
      tipo: "Cumpleaños",
      fecha: "2026-09-14",
      detalle: "Cumpleaños en septiembre · anotar para campaña",
    },
    notas: "Toma café frecuente. Explicar protocolo de tinción post-tratamiento.",
  },
  p17: {
    pacienteId: "p17",
    tratamientoAnterior: "Presupuesto #1042 emitido (armonización)",
    fechaTratamientoAnterior: "2026-07-11",
    vienePor: "Armonización facial · sesión 2 de 3",
    podriaBeneficiarse: [
      "Cerrar presupuesto pendiente $450.000",
      "Skin quality protocol complementario",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-06-01",
      detalle: "Plan facial en curso · alta conversión esperada",
    },
    notas: "VIP. Seguimiento de presupuesto en cola AURA. Prefiere hablar con la Dra.",
  },
  p18: {
    pacienteId: "p18",
    tratamientoAnterior: "Profilaxis + pulido",
    fechaTratamientoAnterior: "2026-05-08",
    vienePor: "Blanqueamiento",
    podriaBeneficiarse: [
      "Carillas mínimamente invasivas si no alcanza tono deseado",
      "Control de higiene a 3 meses",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2025-11-03",
      detalle: "8 meses en la consulta",
    },
    notas: "Deportista. Evitar citas en horario de entrenamiento (tardes tempranas).",
  },
  p19: {
    pacienteId: "p19",
    tratamientoAnterior: "Retoque de toxina",
    fechaTratamientoAnterior: "2025-12-20",
    vienePor: "Control post-tratamiento / reevaluación",
    podriaBeneficiarse: [
      "Ciclo completo de toxina (vencido)",
      "Pack ‘vuelve a la consulta’ con control facial",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2025-12-20",
      detalle: "7 meses desde último retoque",
    },
    notas: "Sin respuesta. Candidata a campaña de reactivación si no asiste.",
  },
  p20: {
    pacienteId: "p20",
    tratamientoAnterior: "Relleno de surcos nasogenianos",
    fechaTratamientoAnterior: "2026-03-18",
    vienePor: "Armonización facial · revisión de volumen",
    podriaBeneficiarse: [
      "Toxina en frente para equilibrar tercio superior",
      "Plan anual de mantenimiento facial",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2025-09-12",
      detalle: "Casi 1 año de relación clínica · LTV alto",
    },
    notas: "Sin respuesta martes 16:00. Empresario · contactar por secretaria si no responde.",
  },
};

export function getPacienteAgendaDetalle(
  pacienteId: string
): PacienteAgendaDetalle | null {
  return pacienteAgendaDetalles[pacienteId] ?? null;
}
