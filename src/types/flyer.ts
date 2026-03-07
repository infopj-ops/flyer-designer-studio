export interface FlyerData {
  nombre: string;
  fechaNacimiento: string;
  fechaFallecimiento: string;
  salaVelatorio: string;
  fechaServicio: string;
  horaInicioServicio: string;
  horaFinServicio: string;
  tipoCeremonia: "inhumación" | "cremación" | "";
  horaCeremonia: string;
}

export const defaultFlyerData: FlyerData = {
  nombre: "",
  fechaNacimiento: "",
  fechaFallecimiento: "",
  salaVelatorio: "",
  fechaServicio: "",
  horaInicioServicio: "",
  horaFinServicio: "",
  tipoCeremonia: "",
  horaCeremonia: "",
};
