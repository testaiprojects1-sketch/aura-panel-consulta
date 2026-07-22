"use client";

import type { Cita, PacienteAgendaDetalle } from "@/types";

interface PacienteDetallePanelProps {
  cita: Cita;
  detalle: PacienteAgendaDetalle | null;
  onClose: () => void;
}

function formatFecha(iso: string): string {
  if (!iso || iso === "—") return "—";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export default function PacienteDetallePanel({
  cita,
  detalle,
  onClose,
}: PacienteDetallePanelProps) {
  return (
    <aside
      className="flex h-full w-full flex-col border-l border-line bg-paper"
      aria-label={`Ficha de ${cita.pacienteNombre}`}
    >
      <header className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-teal">
            Ficha de agenda
          </p>
          <h3 className="mt-1 text-[15px] font-medium text-ink">
            {cita.pacienteNombre}
          </h3>
          <p className="mt-0.5 text-[11px] tabular-nums text-muted">
            {cita.fecha.split("-").reverse().join("/")} · {cita.hora} ·{" "}
            {cita.estado}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-line px-2.5 py-1 text-[11px] font-medium text-muted hover:text-ink"
        >
          Cerrar
        </button>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-[12.5px]">
        {!detalle ? (
          <p className="text-muted">
            Sin ficha detallada para este paciente en el seed de demo.
          </p>
        ) : (
          <>
            <section>
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-muted">
                Tratamiento anterior
              </h4>
              <p className="mt-1.5 font-medium text-ink">
                {detalle.tratamientoAnterior}
              </p>
              <p className="mt-0.5 text-[11px] text-muted">
                {formatFecha(detalle.fechaTratamientoAnterior)}
              </p>
            </section>

            <section>
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-muted">
                Viene por
              </h4>
              <p className="mt-1.5 text-ink">{detalle.vienePor}</p>
              <p className="mt-1 text-[11px] text-muted">
                En agenda: {cita.tratamiento}
              </p>
            </section>

            <section>
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-muted">
                Podría beneficiarse de
              </h4>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-ink">
                {detalle.podriaBeneficiarse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg border border-line bg-white px-3 py-2.5">
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-taupe">
                Aniversario · {detalle.aniversario.tipo}
              </h4>
              <p className="mt-1 font-medium tabular-nums text-ink">
                {formatFecha(detalle.aniversario.fecha)}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">
                {detalle.aniversario.detalle}
              </p>
            </section>

            <section>
              <h4 className="text-[10px] font-medium uppercase tracking-wider text-muted">
                Notas
              </h4>
              <p className="mt-1.5 leading-relaxed text-ink">{detalle.notas}</p>
            </section>
          </>
        )}
      </div>

      <footer className="border-t border-line px-4 py-2.5">
        <p className="text-[10px] text-muted">
          AURA propone oportunidades · usted decide el plan clínico
        </p>
      </footer>
    </aside>
  );
}
