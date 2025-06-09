export default function InventarioCard({ producto }) {
  if (!producto) return null;

  return (
    <div className="mt-4 p-4 bg-white shadow rounded">
      <h3 className="text-xl font-bold">{producto.nombre}</h3>
      <p>
        <strong>Categoría:</strong> {producto.categoria}
      </p>
      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>
      <p>
        <strong>Stock:</strong> {producto.stock} unidades
      </p>
    </div>
  );
}
