export default function InventarioTable({ productos, onSelect }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr>
          <th className="border p-2">Producto</th>
          <th className="border p-2">Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((prod) => (
          <tr
            key={prod.id}
            className="hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelect(prod)}
          >
            <td className="border p-2">{prod.nombre}</td>
            <td className="border p-2">{prod.categoria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
