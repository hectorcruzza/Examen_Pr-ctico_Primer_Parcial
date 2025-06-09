import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function NavBar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

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

      <div className="mt-4 md:mt-auto">
        <p className="text-sm mb-2">{user.email}</p>
        <button
          onClick={handleLogout}
          className="text-sm text-white hover:underline"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
