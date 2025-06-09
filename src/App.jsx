import { Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Empleados from "./components/Empleados";
import Inventario from "./components/Inventario";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
}

function MainContent() {
  const { user, loading } = useAuth();

  if (loading) return <h1 className="text-2xl text-center">Cargando...</h1>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {user && <NavBar />}
      <div className="flex-1 p-4 bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Inicio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/empleados"
            element={
              <ProtectedRoute>
                <Empleados />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inventario"
            element={
              <ProtectedRoute>
                <Inventario />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
