import type { FlyerData } from "@/types/flyer";
import logoImg from "@/assets/logo.png";

interface FlyerPreviewProps {
  data: FlyerData;
}

const formatDate = (dateStr: string): string => {
  if (!dateStr) return "___/___/______";
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
};

const formatTime = (timeStr: string): string => {
  if (!timeStr) return "__:__";
  return timeStr;
};

const FlyerPreview = ({ data }: FlyerPreviewProps) => {
  const nombre = data.nombre || "[Nombre Completo]";
  const fechaNac = formatDate(data.fechaNacimiento);
  const fechaFall = formatDate(data.fechaFallecimiento);
  const sala = data.salaVelatorio || "[sala]";
  const fechaServ = formatDate(data.fechaServicio);
  const horaInicio = formatTime(data.horaInicioServicio);
  const horaFin = formatTime(data.horaFinServicio);
  const tipoCeremonia = data.tipoCeremonia || "[tipo ceremonia]";
  const horaCeremonia = formatTime(data.horaCeremonia);

  return (
    <div className="w-full max-w-[480px] mx-auto aspect-square relative overflow-hidden rounded-lg shadow-lg bg-flyer-bg">
      
      {/* Cloud shapes top */}
      <div className="absolute top-0 left-0 right-0 h-24">
        <svg viewBox="0 0 480 96" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,40 Q60,10 120,35 Q180,5 240,30 Q300,0 360,25 Q420,5 480,30 L480,0 L0,0 Z" fill="hsl(195, 70%, 82%)" />
          <path d="M0,60 Q80,30 160,50 Q240,20 320,45 Q400,25 480,50 L480,0 L0,0 Z" fill="hsl(195, 75%, 87%)" opacity="0.7" />
        </svg>
      </div>

      {/* Cloud shapes bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg viewBox="0 0 480 96" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,56 Q60,86 120,61 Q180,91 240,66 Q300,96 360,71 Q420,91 480,66 L480,96 L0,96 Z" fill="hsl(195, 70%, 82%)" />
          <path d="M0,36 Q80,66 160,46 Q240,76 320,51 Q400,71 480,46 L480,96 L0,96 Z" fill="hsl(195, 75%, 87%)" opacity="0.7" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-12 text-center" style={{ fontFamily: "'DIN Next LT Pro', sans-serif" }}>
        {/* Logo */}
        <div className="mb-2">
          <img src={logoImg} alt="Parque Jazmín" className="h-20 mx-auto" />
        </div>

        <p className="text-sm text-foreground/80 mb-1">
          Con profundo respeto, comunicamos el fallecimiento de
        </p>

        <h2 className="text-2xl font-extrabold text-foreground mb-2 leading-tight">
          {nombre}
        </h2>

        <div className="w-48 border-t border-flyer-border mx-auto mb-1" />

        <p className="text-sm text-foreground/70 mb-1">
          ~ {fechaNac} - {fechaFall} ~
        </p>

        <div className="w-48 border-t border-flyer-border mx-auto mb-3" />

        <p className="text-sm text-foreground/80 mb-2 font-medium">
          Acompañamos con afecto a sus familiares y<br />
          amigos en este difícil momento.
        </p>

        <p className="text-sm text-foreground/80 mb-4 leading-relaxed max-w-[320px]">
          Sus restos serán velados en Sala {sala} de Parque Jazmín, el día {fechaServ}, de {horaInicio} a {horaFin} y la ceremonia de {tipoCeremonia} tendrá lugar a las {horaCeremonia}
        </p>

        <div className="w-48 border-t border-flyer-border mx-auto mb-3" />

        <p className="text-sm font-semibold text-foreground">
          Parque Jazmín - RN 11 km.1000
        </p>
        <p className="text-sm font-semibold text-foreground">
          Resistencia, Chaco.
        </p>
      </div>
    </div>
  );
};

export default FlyerPreview;
