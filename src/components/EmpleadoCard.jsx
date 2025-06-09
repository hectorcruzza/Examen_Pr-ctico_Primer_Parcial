export default function EmpleadoCard({ empleado }) {
  if (!empleado) return null;

  return (
    <div className="mt-4 p-4 bg-white shadow rounded">
      <h3 className="text-xl font-bold">{empleado.nombre}</h3>
      <p>
        <strong>Puesto:</strong> {empleado.puesto}
      </p>
      <p>
        <strong>Área:</strong> {empleado.area}
      </p>
      <p>
        <strong>Teléfono:</strong> {empleado.telefono}
      </p>
    </div>
  );
}
