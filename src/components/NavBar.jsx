import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full md:w-64 bg-red-900 text-white flex md:flex-col p-4 space-y-0 md:space-y-4">
      <h1 className="text-2xl font-bold mb-6">POS App</h1>
      <Link to="/" className="hover:bg-red-800 p-2 rounded">
        Inicio
      </Link>
      <Link to="/empleados" className="hover:bg-red-800 p-2 rounded">
        Empleados
      </Link>
      <Link to="/inventario" className="hover:bg-red-800 p-2 rounded">
        Inventario
      </Link>
    </nav>
  );
}
