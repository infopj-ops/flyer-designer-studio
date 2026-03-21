import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FlyerData } from "@/types/flyer";

interface FlyerFormProps {
  data: FlyerData;
  onChange: (data: FlyerData) => void;
}

const FlyerForm = ({ data, onChange }: FlyerFormProps) => {
  const update = (field: keyof FlyerData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold text-foreground">Datos del servicio</h2>

      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre completo</Label>
        <Input
          id="nombre"
          placeholder="Ej: Elba Lucia Liva"
          value={data.nombre}
          onChange={(e) => update("nombre", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fechaFallecimiento">Fecha de fallecimiento</Label>
        <Input
          id="fechaFallecimiento"
          type="date"
          value={data.fechaFallecimiento}
          onChange={(e) => update("fechaFallecimiento", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="salaVelatorio">Sala de velatorio</Label>
        <Input
          id="salaVelatorio"
          placeholder="Ej: A1"
          value={data.salaVelatorio}
          onChange={(e) => update("salaVelatorio", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fechaServicio">Fecha del servicio</Label>
        <Input
          id="fechaServicio"
          type="date"
          value={data.fechaServicio}
          onChange={(e) => update("fechaServicio", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="horaInicioServicio">Hora inicio</Label>
          <Input
            id="horaInicioServicio"
            type="time"
            value={data.horaInicioServicio}
            onChange={(e) => update("horaInicioServicio", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="horaFinServicio">Hora fin</Label>
          <Input
            id="horaFinServicio"
            type="time"
            value={data.horaFinServicio}
            onChange={(e) => update("horaFinServicio", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Tipo de ceremonia</Label>
        <Select
          value={data.tipoCeremonia}
          onValueChange={(v) => update("tipoCeremonia", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inhumación">Inhumación</SelectItem>
            <SelectItem value="cremación">Cremación</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="horaCeremonia">Hora de ceremonia</Label>
        <Input
          id="horaCeremonia"
          type="time"
          value={data.horaCeremonia}
          onChange={(e) => update("horaCeremonia", e.target.value)}
        />
      </div>
    </div>
  );
};

export default FlyerForm;
