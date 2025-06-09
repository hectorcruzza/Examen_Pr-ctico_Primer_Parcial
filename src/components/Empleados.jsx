import { useState } from "react";
import EmpleadosTable from "./EmpleadosTable";
import EmpleadoCard from "./EmpleadoCard";

export default function Empleados() {
  const empleados = [
    {
      id: 1,
      nombre: "Héctor Cruz",
      puesto: "Administrador",
      area: "Ventas",
      telefono: "981-135-1904",
    },
    {
      id: 2,
      nombre: "Pedro Cruz",
      puesto: "Cajero",
      area: "Caja",
      telefono: "981-126-5174",
    },
  ];

  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  return (
    <div>
      <h2 className="text-2xl mb-4">Gestión de Empleados</h2>
      <EmpleadosTable
        empleados={empleados}
        onSelect={setEmpleadoSeleccionado}
      />
      <EmpleadoCard empleado={empleadoSeleccionado} />
    </div>
  );
}
