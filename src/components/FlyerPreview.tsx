import { forwardRef } from "react";
import type { FlyerData } from "@/types/flyer";
import logoImg from "@/assets/logo.png";

interface FlyerPreviewProps {
  data: FlyerData;
}

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const formatDateLong = (dateStr: string): string => {
  if (!dateStr) return "__ de ______ de ____";
  const [y, m, d] = dateStr.split("-");
  return `${d} de ${MONTHS[parseInt(m, 10) - 1]} de ${y}`;
};

const formatTime = (timeStr: string): string => {
  if (!timeStr) return "__:__";
  return timeStr;
};

const isToday = (dateStr: string): boolean => {
  if (!dateStr) return false;
  const today = new Date();
  const [y, m, d] = dateStr.split("-").map(Number);
  return today.getFullYear() === y && today.getMonth() + 1 === m && today.getDate() === d;
};

const FlyerPreview = forwardRef<HTMLDivElement, FlyerPreviewProps>(({ data }, ref) => {
  const nombre = data.nombre || "[Nombre Completo]";
  const fechaFall = formatDateLong(data.fechaFallecimiento);
  const sala = data.salaVelatorio || "[sala]";
  const horaInicio = formatTime(data.horaInicioServicio);
  const horaFin = formatTime(data.horaFinServicio);
  const tipoCeremonia = data.tipoCeremonia || "[tipo ceremonia]";
  const horaCeremonia = formatTime(data.horaCeremonia);
  const servicioHoy = isToday(data.fechaServicio);
  const velados = servicioHoy ? "Sus restos son velados" : "Sus restos serán velados";

  return (
    <div ref={ref} className="w-[1200px] h-[1200px] relative overflow-hidden bg-flyer-bg">

      {/* Cloud shapes top */}
      <div className="absolute top-0 left-0 right-0 h-40">
        <svg viewBox="0 0 1200 160" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,75 Q150,20 300,62 Q450,8 600,50 Q750,0 900,45 Q1050,8 1200,55 L1200,0 L0,0 Z" fill="hsl(195, 70%, 82%)" />
          <path d="M0,112 Q200,50 400,95 Q600,30 800,80 Q1000,45 1200,95 L1200,0 L0,0 Z" fill="hsl(195, 75%, 87%)" opacity="0.7" />
        </svg>
      </div>

      {/* Cloud shapes bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40">
        <svg viewBox="0 0 1200 160" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,85 Q150,135 300,97 Q450,148 600,110 Q750,160 900,122 Q1050,148 1200,110 L1200,160 L0,160 Z" fill="hsl(195, 70%, 82%)" />
          <path d="M0,50 Q200,110 400,75 Q600,125 800,87 Q1000,120 1200,75 L1200,160 L0,160 Z" fill="hsl(195, 75%, 87%)" opacity="0.7" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-20 py-28 text-center" style={{ fontFamily: "'DIN Next LT Pro', sans-serif" }}>
        {/* Logo */}
        <div className="mb-6">
          <img src={logoImg} alt="Parque Jazmín" className="h-48 mx-auto" />
        </div>

        <p className="text-2xl text-foreground/70 mb-6 tracking-wide">
          Participación de fallecimiento
        </p>

        <div className="w-[500px] border-t border-flyer-border mx-auto mb-6" />

        <h2 className="text-6xl font-extrabold text-foreground mb-6 leading-tight">
          {nombre}
        </h2>

        <p className="text-3xl font-bold text-foreground mb-1">Q.E.P.D.</p>
        <p className="text-2xl text-foreground/70 mb-4">
          falleció el día {fechaFall}
        </p>

        <div className="w-[500px] border-t border-flyer-border mx-auto mb-8" />

        <p className="text-2xl text-foreground/80 mb-6 font-medium">
          Acompañamos con afecto a sus familiares y<br />
          amigos en este difícil momento.
        </p>

        <p className="text-2xl text-foreground/80 mb-10 leading-relaxed max-w-[900px]">
          {velados} en Sala {sala} de Parque Jazmín, de hs. {horaInicio} a hs. {horaFin} y la ceremonia de {tipoCeremonia} tendrá lugar a las hs. {horaCeremonia}
        </p>

        <div className="w-[500px] border-t border-flyer-border mx-auto mb-8" />

        <p className="text-2xl font-semibold text-foreground">
          Parque Jazmín - RN 11 km.1000
        </p>
        <p className="text-2xl font-semibold text-foreground">
          Resistencia, Chaco.
        </p>
      </div>
    </div>
  );
});

FlyerPreview.displayName = "FlyerPreview";

export default FlyerPreview;
