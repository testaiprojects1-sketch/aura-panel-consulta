/**
 * =============================================================================
 * AURA — Fichas de agenda (detalle al clic)
 * =============================================================================
 * Simulación ficha clínica estética facial (Vitacura). Cada paciente con cita
 * esta semana: historial, motivo, upsells y notas de consulta.
 * =============================================================================
 */

import type { PacienteAgendaDetalle } from "@/types";

export const pacienteAgendaDetalles: Record<string, PacienteAgendaDetalle> = {
  p01: {
    pacienteId: "p01",
    tratamientoAnterior: "Evaluación facial + presupuesto #1044 (skinbooster)",
    fechaTratamientoAnterior: "2026-07-14",
    vienePor: "Skinbooster mejillas · sesión 1 de 3",
    podriaBeneficiarse: [
      "Toxina tercio superior entre sesiones de skinbooster",
      "Membresía calidad de piel semestral",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-07-14",
      detalle: "8 días desde inicio del pack · saldo pendiente $190.000",
    },
    notas:
      "Prefiere WhatsApp por la mañana. Sin alergias declaradas. Busca glow natural, sin volumen excesivo.",
  },
  p02: {
    pacienteId: "p02",
    tratamientoAnterior: "Toxina frente + entrecejo (primera vez)",
    fechaTratamientoAnterior: "2026-06-02",
    vienePor: "Evaluación facial + fotos de seguimiento",
    podriaBeneficiarse: [
      "Ácido hialurónico labial suave (0,5–0,7 ml)",
      "Pack mantenimiento toxina cada 4–5 meses",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2025-07-20",
      detalle: "Cumple 1 año como paciente esta semana",
    },
    notas:
      "Ejecutivo · agenda flexible después de las 17:00. Referido por F. Valdés. Quiere resultado discreto.",
  },
  p03: {
    pacienteId: "p03",
    tratamientoAnterior: "Toxina botulínica frente y entrecejo",
    fechaTratamientoAnterior: "2026-01-15",
    vienePor: "Retoque toxina · ventana ideal a 6 meses",
    podriaBeneficiarse: [
      "Hidratación labial con AH de baja densidad",
      "Skinbooster zona malar si nota piel apagada",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2026-01-15",
      detalle: "Control de toxina vencido · prioridad de reactivación",
    },
    notas: "Viaja mucho a Miami. Confirmar con 48 h de anticipación. Fototipo III.",
  },
  p04: {
    pacienteId: "p04",
    tratamientoAnterior: "Armonización · sesión 2/4 (pómulos + mandíbula)",
    fechaTratamientoAnterior: "2026-06-28",
    vienePor: "Armonización facial · sesión 3 de 4 (perfil)",
    podriaBeneficiarse: [
      "Toxina masaeteros para afinar tercio inferior",
      "Plan VIP de mantención anual (4 controles)",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-04-10",
      detalle: "Plan VIP armonización en curso · LTV $2.850.000",
    },
    notas:
      "Paciente VIP. Prefiere box con ventana. Esposa también es paciente (toxina + labios).",
  },
  p05: {
    pacienteId: "p05",
    tratamientoAnterior: "Consulta de orientación facial (sin inyección)",
    fechaTratamientoAnterior: "2026-05-20",
    vienePor: "Toxina botulínica · primera aplicación",
    podriaBeneficiarse: [
      "Protocolo de mantenimiento cada 4–5 meses",
      "Skinbooster en zona malar a los 30 días",
    ],
    aniversario: {
      tipo: "Cumpleaños",
      fecha: "2026-08-03",
      detalle: "Cumpleaños en 12 días · oportunidad gift card consulta",
    },
    notas:
      "Canceló hoy · reasignar cupo. Ansiosa en primera aplicación; ir despacio y explicar cada paso.",
  },
  p06: {
    pacienteId: "p06",
    tratamientoAnterior: "Simulación digital de perfil + presupuesto #1040",
    fechaTratamientoAnterior: "2026-07-05",
    vienePor: "Perfiloplastia · labios + mentón (AH)",
    podriaBeneficiarse: [
      "Retoque fino a los 14 días si asimetría",
      "Toxina mentón (hoyuelo) complementaria",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-07-05",
      detalle: "17 días en plan activo · alta adherencia",
    },
    notas:
      "Bruxismo leve — evaluar masaeteros en control. Paga con transferencia. Traer fotos de referencia.",
  },
  p07: {
    pacienteId: "p07",
    tratamientoAnterior: "Control post-toxina día 14",
    fechaTratamientoAnterior: "2026-03-12",
    vienePor: "Toxina botulínica · tercio superior (ciclo)",
    podriaBeneficiarse: [
      "Contorno labial sutil (AH 0,5 ml)",
      "Membresía de mantenimiento facial",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2024-07-20",
      detalle: "2 años en la consulta · candidata a membresía",
    },
    notas: "Madre de dos · prefiere citas matinales. Muy puntual. Vitacura.",
  },
  p08: {
    pacienteId: "p08",
    tratamientoAnterior: "Ninguno en esta consulta (primera vez)",
    fechaTratamientoAnterior: "—",
    vienePor: "Primera evaluación facial completa",
    podriaBeneficiarse: [
      "Paquete evaluación + fotos + plan digital",
      "Si indica: toxina preventiva tercio superior",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2026-07-22",
      detalle: "Primera visita hoy · alta prioridad de onboarding",
    },
    notas:
      "Llegó por Instagram. Quiere resultado natural, sin ‘cara hinchada’. Presupuesto consciente.",
  },
  p09: {
    pacienteId: "p09",
    tratamientoAnterior: "Armonización de mentón + ángulo mandibular",
    fechaTratamientoAnterior: "2026-04-02",
    vienePor: "Revisión de proporciones · plan de retoque",
    podriaBeneficiarse: [
      "Retoque de toxina en masaeteros",
      "Bioestimulador (CaHA) en línea mandibular",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2026-04-02",
      detalle: "3,5 meses desde última armonización",
    },
    notas: "Fotógrafa · cuida mucho el perfil en cámara. Traer set de fotos previas.",
  },
  p10: {
    pacienteId: "p10",
    tratamientoAnterior: "Peeling superficial + home care",
    fechaTratamientoAnterior: "2026-02-18",
    vienePor: "Peeling químico medio + plan de sesiones",
    podriaBeneficiarse: [
      "Protocolo despigmentante domiciliario",
      "Skinbooster post-peeling (sesión 2)",
    ],
    aniversario: {
      tipo: "Cumpleaños",
      fecha: "2026-07-28",
      detalle: "Cumpleaños en 6 días",
    },
    notas:
      "Sin respuesta a confirmación. Fototipo IV · reforzar fotoprotección post-peeling.",
  },
  p11: {
    pacienteId: "p11",
    tratamientoAnterior: "Toxina full face (frente, crow’s feet, mentón)",
    fechaTratamientoAnterior: "2026-07-08",
    vienePor: "Control post-toxina a 14 días",
    podriaBeneficiarse: [
      "Microajuste si queda asimetría en ceja",
      "AH ojera si sombra residual molesta",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-04-15",
      detalle: "Ciclo de toxina en fase de control",
    },
    notas: "Sin respuesta hoy 12:00. Si no confirma, llamar a las 11:30.",
  },
  p12: {
    pacienteId: "p12",
    tratamientoAnterior: "Bioestimulador (PLLA) · sesión 1/2",
    fechaTratamientoAnterior: "2026-06-10",
    vienePor: "Control 15 días · bioestimulador",
    podriaBeneficiarse: [
      "Sesión 2 de PLLA a las 6–8 semanas",
      "Toxina tercio superior para equilibrar",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2026-06-10",
      detalle: "6 semanas post-sesión 1 de bioestimulador",
    },
    notas: "Cupo liberado (canceló). Reagendar preferente la próxima semana. Masajeó bien.",
  },
  p13: {
    pacienteId: "p13",
    tratamientoAnterior: "Ninguno en esta consulta (primera vez)",
    fechaTratamientoAnterior: "—",
    vienePor: "Primera evaluación facial",
    podriaBeneficiarse: [
      "Toxina preventiva (25–30 años)",
      "Peeling + skinbooster si piel deshidratada",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2026-07-24",
      detalle: "Primera visita el viernes",
    },
    notas:
      "Estudiante de derecho. Presupuesto consciente · ofrecer plan por etapas (toxina primero).",
  },
  p14: {
    pacienteId: "p14",
    tratamientoAnterior: "Consulta online de orientación (lead Google)",
    fechaTratamientoAnterior: "2026-07-01",
    vienePor: "Evaluación inicial presencial",
    podriaBeneficiarse: [
      "Pack evaluación + fotos + mapa de inyección",
      "Si hay bruxismo: toxina masaetero + férula (derivación)",
    ],
    aniversario: {
      tipo: "Primera visita",
      fecha: "2026-07-23",
      detalle: "Primera presencial tras lead de Google Ads",
    },
    notas: "Lead Google Ads. Aún sin confirmar. Enviar recordatorio WhatsApp.",
  },
  p15: {
    pacienteId: "p15",
    tratamientoAnterior: "Toxina + AH labios (sesión previa)",
    fechaTratamientoAnterior: "2025-12-10",
    vienePor: "Ácido hialurónico labios · acabado natural",
    podriaBeneficiarse: [
      "Retoque labial a 14 días si asimetría",
      "Campaña ‘vuelve a la consulta’ cumplida · reforzar vínculo",
    ],
    aniversario: {
      tipo: "Último control",
      fecha: "2025-12-10",
      detalle: "7+ meses sin visita clínica completa",
    },
    notas: "Sábado 10:00. Viene con su madre (posible lead familiar Las Condes).",
  },
  p16: {
    pacienteId: "p16",
    tratamientoAnterior: "Evaluación bruxismo + mapa masaeteros",
    fechaTratamientoAnterior: "2026-06-22",
    vienePor: "Toxina masaeteros (bruxismo / afinamiento)",
    podriaBeneficiarse: [
      "Control de fuerza masticatoria a 4 semanas",
      "AH mentón si busca V-shape más marcado",
    ],
    aniversario: {
      tipo: "Cumpleaños",
      fecha: "2026-09-14",
      detalle: "Cumpleaños en septiembre · anotar para campaña",
    },
    notas:
      "Deportista. Explicar posible fatiga masticatoria transitoria. Evitar citas en horario de gym.",
  },
  p17: {
    pacienteId: "p17",
    tratamientoAnterior: "Presupuesto #1042 emitido (armonización full)",
    fechaTratamientoAnterior: "2026-07-11",
    vienePor: "Armonización facial · sesión 2 de 3",
    podriaBeneficiarse: [
      "Cerrar presupuesto pendiente $650.000",
      "Protocolo skin quality (booster) complementario",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2026-06-01",
      detalle: "Plan facial en curso · alta conversión esperada",
    },
    notas:
      "VIP. Seguimiento de presupuesto en cola AURA. Prefiere hablar solo con la Dra.",
  },
  p18: {
    pacienteId: "p18",
    tratamientoAnterior: "Consulta de perfil + simulación",
    fechaTratamientoAnterior: "2026-05-08",
    vienePor: "Ácido hialurónico · mentón",
    podriaBeneficiarse: [
      "Ángulo mandibular si busca proyección lateral",
      "Control de higiene de sueño / bruxismo",
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
    tratamientoAnterior: "Retoque de toxina full face",
    fechaTratamientoAnterior: "2025-12-20",
    vienePor: "Control + reevaluación facial",
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
    tratamientoAnterior: "Relleno de surcos nasogenianos (AH)",
    fechaTratamientoAnterior: "2026-03-18",
    vienePor: "Revisión de volumen · surcos nasogenianos",
    podriaBeneficiarse: [
      "Toxina en frente para equilibrar tercio superior",
      "Plan anual de mantenimiento facial VIP",
    ],
    aniversario: {
      tipo: "Inicio de plan",
      fecha: "2025-09-12",
      detalle: "Casi 1 año de relación clínica · LTV alto",
    },
    notas:
      "Sin respuesta martes 16:00. Empresario · contactar por secretaria si no responde.",
  },
};

export function getPacienteAgendaDetalle(
  pacienteId: string
): PacienteAgendaDetalle | null {
  return pacienteAgendaDetalles[pacienteId] ?? null;
}
