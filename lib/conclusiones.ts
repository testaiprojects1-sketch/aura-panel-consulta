import { formatCLP } from "@/lib/format";

export interface DashboardSnapshot {
  fechaLabel: string;
  citasHoy: number;
  tasaConfirmacion: number;
  presupuestosPendientes: number;
  porCobrar: number;
  seguimientosPorContactar: number;
  pacientesNuevosMes: number;
  aprobacionesEnCola: number;
  aprobadasHoy: number;
  citasSinRespuesta: string[];
  citasCanceladas: string[];
  tareasAbiertas: number;
  inactivosAlta: number;
  titulosAprobaciones: string[];
}

/** Lee el estado del panel y produce conclusiones accionables (español chileno). */
export function buildConclusiones(s: DashboardSnapshot): string {
  const bullets: string[] = [];

  if (s.citasCanceladas.length > 0) {
    bullets.push(
      `Hay ${s.citasCanceladas.length} cupo(s) liberado(s) hoy (${s.citasCanceladas.join("; ")}). Priorice rellenar desde lista de espera antes del mediodía.`
    );
  }

  if (s.citasSinRespuesta.length > 0) {
    bullets.push(
      `${s.citasSinRespuesta.length} cita(s) sin respuesta (${s.citasSinRespuesta.join("; ")}). Un WhatsApp de confirmación ahora evita no-show.`
    );
  }

  if (s.aprobacionesEnCola > 0) {
    const sample = s.titulosAprobaciones.slice(0, 2).join(" · ");
    bullets.push(
      `Tiene ${s.aprobacionesEnCola} acción(es) en cola de AURA${sample ? `: ${sample}` : ""}. Aprobar hoy mueve cobranza y reactivación sin salir del panel.`
    );
  }

  if (s.porCobrar > 0) {
    bullets.push(
      `Por cobrar ${formatCLP(s.porCobrar)} y presupuestos en seguimiento ${formatCLP(s.presupuestosPendientes)}. La tasa de confirmación semanal está en ${s.tasaConfirmacion}% — el foco comercial es cierre, no solo agenda.`
    );
  }

  if (s.inactivosAlta > 0) {
    bullets.push(
      `${s.inactivosAlta} paciente(s) inactivo(s) de prioridad Alta. Una campaña de reactivación esta semana ataca fuga de LTV.`
    );
  }

  if (s.tareasAbiertas > 0) {
    bullets.push(
      `${s.tareasAbiertas} tarea(s) abiertas en Acciones & Tareas. Cierre las diarias antes de las 18:00 para no arrastrar deuda operativa.`
    );
  }

  if (bullets.length === 0) {
    bullets.push(
      "El panel está en orden relativo. Use el simulador de KPIs para proyectar membresías y recuperación de controles."
    );
  }

  const intro = `Dra. Fontecilla — conclusiones AURA para ${s.fechaLabel}. Hoy: ${s.citasHoy} citas, ${s.seguimientosPorContactar} seguimientos por contactar, ${s.pacientesNuevosMes} pacientes nuevos este mes, ${s.aprobadasHoy} aprobación(es) ya hecha(s).`;

  return [intro, "", ...bullets.map((b, i) => `${i + 1}. ${b}`)].join("\n");
}

export function snapshotToPlainContext(s: DashboardSnapshot): string {
  return [
    `Fecha: ${s.fechaLabel}`,
    `Citas hoy: ${s.citasHoy}`,
    `Sin respuesta: ${s.citasSinRespuesta.join(", ") || "ninguna"}`,
    `Canceladas: ${s.citasCanceladas.join(", ") || "ninguna"}`,
    `Confirmación semanal: ${s.tasaConfirmacion}%`,
    `Presupuestos pendientes: ${formatCLP(s.presupuestosPendientes)}`,
    `Por cobrar: ${formatCLP(s.porCobrar)}`,
    `Seguimientos: ${s.seguimientosPorContactar}`,
    `Nuevos mes: ${s.pacientesNuevosMes}`,
    `Aprobaciones en cola: ${s.aprobacionesEnCola}`,
    `Aprobadas hoy: ${s.aprobadasHoy}`,
    `Tareas abiertas: ${s.tareasAbiertas}`,
    `Inactivos Alta: ${s.inactivosAlta}`,
    `Cola: ${s.titulosAprobaciones.join(" | ")}`,
  ].join("\n");
}
