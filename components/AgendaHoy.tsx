"use client";

import { useMemo, useState } from "react";
import { citasSemana, HOY_FECHA } from "@/data/mock";
import { getPacienteAgendaDetalle } from "@/data/agendaDetails";
import type { Cadencia, Cita, CitaEstado } from "@/types";
import CadenceToggle from "@/components/CadenceToggle";
import PacienteDetallePanel from "@/components/PacienteDetallePanel";

const WEEK_DAYS = [
  { fecha: "2026-07-20", label: "Lun 20" },
  { fecha: "2026-07-21", label: "Mar 21" },
  { fecha: "2026-07-22", label: "Mié 22", today: true },
  { fecha: "2026-07-23", label: "Jue 23" },
  { fecha: "2026-07-24", label: "Vie 24" },
  { fecha: "2026-07-25", label: "Sáb 25" },
  { fecha: "2026-07-26", label: "Dom 26" },
];

/** Julio 2026 empieza en miércoles → offset 3 (domingo=0). */
const MONTH_START_OFFSET = 3;
const MONTH_DAYS = 31;
const MONTH_YEAR = 2026;
const MONTH_INDEX = 7;

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const SUBTITLES: Record<Cadencia, string> = {
  diaria: "Miércoles 22 de julio · calendario del día",
  semanal: "Semana del 20–26 de julio",
  mensual: "Julio 2026",
};

function estadoStyles(estado: CitaEstado): string {
  switch (estado) {
    case "Confirmada":
      return "border-success/30 bg-success/10 text-success";
    case "Sin respuesta":
      return "border-taupe/30 bg-taupe/10 text-taupe";
    case "Cancelada":
      return "border-alert/30 bg-alert/10 text-alert";
    default: {
      const _exhaustive: never = estado;
      return _exhaustive;
    }
  }
}

function CitaChip({
  cita,
  compact,
  onSelect,
}: {
  cita: Cita;
  compact?: boolean;
  onSelect: (cita: Cita) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(cita)}
      className={`w-full rounded-md border px-1.5 py-1 text-left transition-opacity hover:opacity-90 ${estadoStyles(cita.estado)} ${
        compact ? "text-[10px] leading-tight" : "text-[11px]"
      }`}
    >
      <span className="font-medium tabular-nums">{cita.hora}</span>
      <span className="mt-0.5 block truncate font-medium text-ink underline-offset-2 hover:underline">
        {cita.pacienteNombre.split(" ").slice(0, 2).join(" ")}
      </span>
      {!compact && (
        <span className="mt-0.5 block truncate text-[10px] text-muted">
          {cita.tratamiento}
        </span>
      )}
      {cita.estado === "Cancelada" && (
        <span className="mt-0.5 block text-[9px] font-medium">Cupo liberado</span>
      )}
    </button>
  );
}

export default function AgendaHoy() {
  const [cadencia, setCadencia] = useState<Cadencia>("diaria");
  const [selected, setSelected] = useState<Cita | null>(null);

  const byDate = useMemo(() => {
    const map = new Map<string, Cita[]>();
    for (const cita of citasSemana) {
      const list = map.get(cita.fecha) ?? [];
      list.push(cita);
      map.set(cita.fecha, list);
    }
    for (const list of Array.from(map.values())) {
      list.sort((a, b) => a.hora.localeCompare(b.hora));
    }
    return map;
  }, []);

  const citasHoy = byDate.get(HOY_FECHA) ?? [];

  const detalle = selected
    ? getPacienteAgendaDetalle(selected.pacienteId)
    : null;

  const monthCells = useMemo(() => {
    const cells: Array<{ day: number | null; fecha: string | null }> = [];
    for (let i = 0; i < MONTH_START_OFFSET; i += 1) {
      cells.push({ day: null, fecha: null });
    }
    for (let d = 1; d <= MONTH_DAYS; d += 1) {
      const fecha = `${MONTH_YEAR}-${String(MONTH_INDEX).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({ day: d, fecha });
    }
    while (cells.length % 7 !== 0) {
      cells.push({ day: null, fecha: null });
    }
    return cells;
  }, []);

  return (
    <section className="rounded-lg border border-line bg-white shadow-card">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <h2 className="text-[14px] font-medium text-ink">Agenda</h2>
          <p className="mt-0.5 text-[11px] text-muted">{SUBTITLES[cadencia]}</p>
        </div>
        <CadenceToggle
          value={cadencia}
          onChange={setCadencia}
          ariaLabel="Vista de agenda"
        />
      </header>

      <div
        className={`grid min-h-[420px] ${
          selected ? "grid-cols-[1fr_300px]" : "grid-cols-1"
        }`}
      >
        <div className="min-w-0 overflow-x-auto p-3">
          {cadencia === "diaria" && (
            <div className="space-y-1">
              <div className="mb-2 flex items-center justify-between px-1">
                <p className="text-[12px] font-medium text-ink">
                  Miércoles 22 de julio
                </p>
                <p className="text-[11px] text-muted">
                  {citasHoy.length} citas · clic en el nombre para abrir ficha
                </p>
              </div>
              {TIME_SLOTS.map((slot) => {
                const slotCitas = citasHoy.filter((c) => c.hora === slot);
                return (
                  <div
                    key={slot}
                    className="grid grid-cols-[52px_1fr] gap-2 border-b border-line/70 py-1.5 last:border-0"
                  >
                    <span className="pt-1 text-[11px] tabular-nums text-muted">
                      {slot}
                    </span>
                    <div className="min-h-[36px] space-y-1">
                      {slotCitas.length === 0 ? (
                        <div className="h-9 rounded-md border border-dashed border-line/80 bg-paper/50" />
                      ) : (
                        slotCitas.map((cita) => (
                          <CitaChip
                            key={cita.id}
                            cita={cita}
                            onSelect={setSelected}
                          />
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {cadencia === "semanal" && (
            <div className="grid min-w-[720px] grid-cols-7 gap-1.5">
              {WEEK_DAYS.map((day) => {
                const dayCitas = byDate.get(day.fecha) ?? [];
                return (
                  <div
                    key={day.fecha}
                    className={`min-h-[360px] rounded-lg border p-1.5 ${
                      day.today
                        ? "border-teal/40 bg-teal/[0.03]"
                        : "border-line bg-paper/40"
                    }`}
                  >
                    <p
                      className={`mb-2 px-0.5 text-[11px] font-medium ${
                        day.today ? "text-teal" : "text-muted"
                      }`}
                    >
                      {day.label}
                    </p>
                    <div className="space-y-1">
                      {dayCitas.length === 0 ? (
                        <p className="px-0.5 text-[10px] text-muted">Sin citas</p>
                      ) : (
                        dayCitas.map((cita) => (
                          <CitaChip
                            key={cita.id}
                            cita={cita}
                            compact
                            onSelect={setSelected}
                          />
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {cadencia === "mensual" && (
            <div>
              <div className="mb-2 grid grid-cols-7 gap-1 text-center text-[10px] font-medium uppercase tracking-wider text-muted">
                {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {monthCells.map((cell, idx) => {
                  if (cell.day == null || cell.fecha == null) {
                    return (
                      <div
                        key={`empty-${idx}`}
                        className="min-h-[88px] rounded-md bg-transparent"
                      />
                    );
                  }
                  const dayCitas = byDate.get(cell.fecha) ?? [];
                  const isToday = cell.fecha === HOY_FECHA;
                  return (
                    <div
                      key={cell.fecha}
                      className={`min-h-[88px] rounded-md border p-1 ${
                        isToday
                          ? "border-teal/40 bg-teal/[0.04]"
                          : "border-line bg-paper/30"
                      }`}
                    >
                      <p
                        className={`mb-1 text-[11px] font-medium tabular-nums ${
                          isToday ? "text-teal" : "text-ink"
                        }`}
                      >
                        {cell.day}
                      </p>
                      <div className="space-y-0.5">
                        {dayCitas.slice(0, 3).map((cita) => (
                          <button
                            key={cita.id}
                            type="button"
                            onClick={() => setSelected(cita)}
                            className={`block w-full truncate rounded px-1 py-0.5 text-left text-[9px] font-medium ${estadoStyles(cita.estado)}`}
                            title={cita.pacienteNombre}
                          >
                            {cita.hora}{" "}
                            {cita.pacienteNombre.split(" ")[0]}
                          </button>
                        ))}
                        {dayCitas.length > 3 && (
                          <p className="px-0.5 text-[9px] text-muted">
                            +{dayCitas.length - 3} más
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {selected && (
          <PacienteDetallePanel
            cita={selected}
            detalle={detalle}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  );
}
