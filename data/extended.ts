/**
 * =============================================================================
 * AURA — Datos adicionales de demostración (v2 módulos)
 * =============================================================================
 * Consulta de estética facial · Vitacura. Seed liviano para demo — los módulos
 * se llenan solos con cada paciente real / Sheet sincronizado.
 * =============================================================================
 */

import type {
  BenchmarkKpi,
  GrowthPoint,
  HeatCell,
  LeadCard,
  LoyaltyBucket,
  PatientCard,
  RiskStat,
  StatusStripData,
  TaskItem,
  TrendPoint,
} from "@/types";

export const statusStrip: StatusStripData = {
  fechaLabel: "Miércoles 22 de julio de 2026",
  seguimientosPorContactar: 7,
  pacientesNuevosMes: 5,
};

export const initialTasks: TaskItem[] = [
  // Diaria
  {
    id: "t01",
    titulo: "Confirmar control post-toxina 12:00 — C. Figueroa",
    owner: "Enfermera",
    rationale: "Sin respuesta hace 18 h · evita no-show de $0 (control) y pierde upsell",
    recuperableCLP: 120000,
    cadencia: "diaria",
    estado: "abierta",
  },
  {
    id: "t02",
    titulo: "Cobrar saldo M. Pérez — $190.000 (skinbooster)",
    owner: "Dra. Macarena",
    rationale: "Factura vencida 12 días · pack sesión 1/3",
    recuperableCLP: 190000,
    cadencia: "diaria",
    estado: "abierta",
  },
  {
    id: "t03",
    titulo: "Reasignar cupo 16:30 (cancelación V. Contreras · toxina)",
    owner: "Enfermera",
    rationale: "Cupo liberado · lista de espera con 2 candidatas a toxina",
    cadencia: "diaria",
    estado: "abierta",
  },
  {
    id: "t04",
    titulo: "Preparar kit perfiloplastia — A. Morales 15:00",
    owner: "Enfermera",
    rationale: "AH labios + mentón · protocolo y lotes listos en ficha",
    cadencia: "diaria",
    estado: "cerrada",
  },
  // Semanal
  {
    id: "t05",
    titulo: "Seguimiento presupuesto #1042 — I. Castro (armonización)",
    owner: "Dra. Macarena",
    rationale: "Emitido hace 11 días · $650.000 en pipeline facial",
    recuperableCLP: 650000,
    cadencia: "semanal",
    estado: "abierta",
  },
  {
    id: "t06",
    titulo: "Campaña reactivación — 5 pacientes toxina vencida 9+ meses",
    owner: "Dra. Macarena",
    rationale: "Prioridad Alta · ~$7,8 M histórico acumulado en cartera inactiva",
    recuperableCLP: 2600000,
    cadencia: "semanal",
    estado: "abierta",
  },
  {
    id: "t07",
    titulo: "Revisar lista de espera jueves–sábado (AH / toxina)",
    owner: "Enfermera",
    rationale: "3 cupos abiertos · relleno reduce ociosidad de box",
    cadencia: "semanal",
    estado: "abierta",
  },
  {
    id: "t08",
    titulo: "Aprobar piezas WhatsApp de la semana",
    owner: "Dra. Macarena",
    rationale: "4 borradores en cola de AURA (reactivación + contenido Vitacura)",
    cadencia: "semanal",
    estado: "bloqueada",
  },
  // Mensual
  {
    id: "t09",
    titulo: "Lanzar membresía mantenimiento facial (4 controles/año)",
    owner: "Dra. Macarena",
    rationale: "Meta: 8 altas · ingreso recurrente estimado $2,4 M/año",
    recuperableCLP: 2400000,
    cadencia: "mensual",
    estado: "abierta",
  },
  {
    id: "t10",
    titulo: "Auditoría de toxinas vencidas 5–6 meses",
    owner: "Enfermera",
    rationale: "14 pacientes · pérdida potencial $4,2 M a 1 año si no retocan",
    recuperableCLP: 4200000,
    cadencia: "mensual",
    estado: "abierta",
  },
  {
    id: "t11",
    titulo: "Calibrar ticket promedio vs. estética facial oriente",
    owner: "Dra. Macarena",
    rationale: "Actual $320k · meta $380k · gap en packs armonización + boosters",
    cadencia: "mensual",
    estado: "abierta",
  },
  {
    id: "t12",
    titulo: "Plan de contenido primeros 90 días (IG/TikTok facial)",
    owner: "Dra. Macarena",
    rationale: "Cuentas en cero · AURA propone calendario (antes/después, educación)",
    cadencia: "mensual",
    estado: "bloqueada",
  },
];

/** Seed liviano — módulos se llenan solos con cada paciente. */
export const patientCards: PatientCard[] = [
  {
    id: "pc01",
    nombre: "Francisco Valdés",
    iniciales: "FV",
    lealtad: "VIP",
    edad: 42,
    ultimoTratamiento: "Armonización facial",
    sesionActual: 3,
    sesionTotal: 4,
    lifetimeValue: 2850000,
  },
  {
    id: "pc02",
    nombre: "María Pérez González",
    iniciales: "MP",
    lealtad: "Regular",
    edad: 38,
    ultimoTratamiento: "Skinbooster mejillas",
    sesionActual: 1,
    sesionTotal: 3,
    lifetimeValue: 1280000,
    alerta: "Pack a medio terminar · saldo $190.000",
  },
  {
    id: "pc03",
    nombre: "Lorena Aguilar",
    iniciales: "LA",
    lealtad: "En riesgo",
    edad: 45,
    ultimoTratamiento: "Toxina full face",
    lifetimeValue: 1680000,
    alerta: "Sin actividad 313 días · toxina vencida",
  },
  {
    id: "pc04",
    nombre: "Isidora Castro",
    iniciales: "IC",
    lealtad: "VIP",
    edad: 34,
    ultimoTratamiento: "Armonización facial",
    sesionActual: 2,
    sesionTotal: 3,
    lifetimeValue: 2140000,
  },
  {
    id: "pc05",
    nombre: "Gonzalo Pizarro",
    iniciales: "GP",
    lealtad: "En riesgo",
    edad: 51,
    ultimoTratamiento: "AH surcos + toxina",
    lifetimeValue: 1120000,
    alerta: "Control vencido hace 142 días",
  },
  {
    id: "pc06",
    nombre: "Constanza Figueroa",
    iniciales: "CF",
    lealtad: "Regular",
    edad: 29,
    ultimoTratamiento: "Control post-toxina",
    lifetimeValue: 1320000,
    alerta: "Control día 14 sin confirmar",
  },
];

export const loyaltyBuckets: LoyaltyBucket[] = [
  {
    tier: "VIP",
    count: 6,
    recuperableCLP: 0,
    note: "Retener con controles y packs de armonización — base sólida",
  },
  {
    tier: "Regular",
    count: 14,
    recuperableCLP: 1120000,
    note: "campaña toxina/booster ≈ $1.120.000 recuperable",
  },
  {
    tier: "En riesgo",
    count: 8,
    recuperableCLP: 4800000,
    note: "reactivación toxina vencida ≈ $4.800.000 recuperable",
  },
];

export const riskStats: RiskStat[] = [
  {
    id: "r1",
    label: "Toxinas vencidas 5–6m",
    value: "14",
    hint: "Pacientes fuera de ventana ideal de retoque",
  },
  {
    id: "r2",
    label: "Riesgo anual de fuga",
    value: "19%",
    hint: "Proyección sobre cartera activa facial",
  },
  {
    id: "r3",
    label: "Pérdida potencial a 1 año",
    value: "$4.200.000",
    hint: "LTV en riesgo si no se reactiva",
  },
];

export const leadCards: LeadCard[] = [
  {
    id: "l01",
    nombre: "Amanda Riquelme",
    probabilidad: 74,
    ocupacion: "Arquitecta",
    comuna: "Vitacura",
    canal: "Instagram",
    tratamientoSugerido: "Evaluación + toxina preventiva",
    ingresoMensualEst: 2800000,
  },
  {
    id: "l02",
    nombre: "Martín Orellana",
    probabilidad: 58,
    ocupacion: "Emprendedor",
    comuna: "Las Condes",
    canal: "Referido",
    tratamientoSugerido: "Armonización · mentón + mandíbula",
    ingresoMensualEst: 3500000,
  },
  {
    id: "l03",
    nombre: "Pía Sandoval",
    probabilidad: 46,
    ocupacion: "Abogada",
    comuna: "Providencia",
    canal: "Google",
    tratamientoSugerido: "AH labios natural + control",
    ingresoMensualEst: 2200000,
  },
];

export const benchmarkKpis: BenchmarkKpi[] = [
  {
    id: "ticket",
    label: "Ticket promedio",
    actual: 320000,
    industria: 345000,
    meta: 380000,
    format: "clp",
  },
  {
    id: "ltv",
    label: "LTV",
    actual: 1420000,
    industria: 1580000,
    meta: 1900000,
    format: "clp",
  },
  {
    id: "vip",
    label: "% VIP",
    actual: 22,
    industria: 18,
    meta: 30,
    format: "percent",
  },
  {
    id: "controles",
    label: "Controles a tiempo",
    actual: 64,
    industria: 73,
    meta: 88,
    format: "percent",
  },
];

export const trendSeries: TrendPoint[] = [
  { mes: "Feb", ticket: 280000, ltv: 1180000, vip: 16, controles: 56 },
  { mes: "Mar", ticket: 290000, ltv: 1220000, vip: 17, controles: 58 },
  { mes: "Abr", ticket: 298000, ltv: 1280000, vip: 18, controles: 59 },
  { mes: "May", ticket: 305000, ltv: 1320000, vip: 19, controles: 61 },
  { mes: "Jun", ticket: 312000, ltv: 1380000, vip: 21, controles: 63 },
  { mes: "Jul", ticket: 320000, ltv: 1420000, vip: 22, controles: 64 },
];

/** Base anual de ingresos de la consulta facial (demo Vitacura). */
export const ingresoAnualBase = 62000000;

export const simulatorDefaults = {
  noShow: 8,
  controles: 12,
  leads: 10,
  membresia: 5,
};

/** Contribución CLP/año por punto porcentual de cada palanca. */
export const simulatorWeights = {
  noShow: 110000,
  controles: 220000,
  leads: 280000,
  membresia: 380000,
};

export const growthSeries: GrowthPoint[] = Array.from({ length: 13 }, (_, i) => {
  const dia = i * 7;
  return {
    dia,
    alcance: Math.round(i * i * 14 + i * 10),
    seguidores: Math.round(i * i * 2.1 + i * 2.5),
    metaAlcance: Math.round(dia * 22 + 50),
  };
});

export const heatDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
export const heatHours = ["09", "11", "13", "15", "17", "19"];

/** Referencia engagement estética facial Chile oriente (demo). */
export const heatCells: HeatCell[] = [
  { dia: "Lun", hora: "09", valor: 2 },
  { dia: "Lun", hora: "11", valor: 4 },
  { dia: "Lun", hora: "13", valor: 3 },
  { dia: "Lun", hora: "15", valor: 5 },
  { dia: "Lun", hora: "17", valor: 7 },
  { dia: "Lun", hora: "19", valor: 5 },
  { dia: "Mar", hora: "09", valor: 3 },
  { dia: "Mar", hora: "11", valor: 5 },
  { dia: "Mar", hora: "13", valor: 4 },
  { dia: "Mar", hora: "15", valor: 7 },
  { dia: "Mar", hora: "17", valor: 9 },
  { dia: "Mar", hora: "19", valor: 6 },
  { dia: "Mié", hora: "09", valor: 3 },
  { dia: "Mié", hora: "11", valor: 6 },
  { dia: "Mié", hora: "13", valor: 5 },
  { dia: "Mié", hora: "15", valor: 8 },
  { dia: "Mié", hora: "17", valor: 9 },
  { dia: "Mié", hora: "19", valor: 7 },
  { dia: "Jue", hora: "09", valor: 4 },
  { dia: "Jue", hora: "11", valor: 6 },
  { dia: "Jue", hora: "13", valor: 5 },
  { dia: "Jue", hora: "15", valor: 8 },
  { dia: "Jue", hora: "17", valor: 9 },
  { dia: "Jue", hora: "19", valor: 8 },
  { dia: "Vie", hora: "09", valor: 3 },
  { dia: "Vie", hora: "11", valor: 5 },
  { dia: "Vie", hora: "13", valor: 4 },
  { dia: "Vie", hora: "15", valor: 7 },
  { dia: "Vie", hora: "17", valor: 8 },
  { dia: "Vie", hora: "19", valor: 9 },
  { dia: "Sáb", hora: "09", valor: 6 },
  { dia: "Sáb", hora: "11", valor: 9 },
  { dia: "Sáb", hora: "13", valor: 8 },
  { dia: "Sáb", hora: "15", valor: 5 },
  { dia: "Sáb", hora: "17", valor: 2 },
  { dia: "Sáb", hora: "19", valor: 1 },
];
