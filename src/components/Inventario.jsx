import { useState } from "react";
import InventarioTable from "./InventarioTable";
import InventarioCard from "./InventarioCard";

export default function Inventario() {
  const productos = [
    {
      id: 1,
      nombre: "Teclado mecánico",
      categoria: "Periféricos",
      precio: 850,
      stock: 12,
    },
    {
      id: 2,
      nombre: 'Monitor 27"',
      categoria: "Pantallas",
      precio: 2400,
      stock: 10,
    },
  ];

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Inventario</h2>
      <InventarioTable
        productos={productos}
        onSelect={setProductoSeleccionado}
      />
      <InventarioCard producto={productoSeleccionado} />
    </div>
  );
}
