export default function EmpleadosTable({ empleados, onSelect }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr>
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Puesto</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((emp) => (
          <tr
            key={emp.id}
            className="hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelect(emp)}
          >
            <td className="border p-2">{emp.nombre}</td>
            <td className="border p-2">{emp.puesto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
