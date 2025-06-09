import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Empleados from "./components/Empleados";
import Inventario from "./components/Inventario";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <NavBar />
      <div className="flex-1 p-4 bg-gray-100">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/inventario" element={<Inventario />} />
        </Routes>
      </div>
    </div>
  );
}
