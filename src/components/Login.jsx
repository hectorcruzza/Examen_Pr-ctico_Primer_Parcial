import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { login, loginGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (error) setError(null);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setError("Las credenciales ingresadas no son válidas.");
      } else {
        setError("Ocurrió un error inesperado.");
      }
    }
  };

  const handleGoogle = async () => {
    try {
      await loginGoogle();
      navigate("/");
    } catch (err) {
      setError("Error con Google.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow max-w-sm w-full">
        <h2 className="text-2xl mb-6 text-red-900 text-center">
          Iniciar Sesión
        </h2>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="border w-full p-2 rounded"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
          />
          <input
            className="border w-full p-2 rounded"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
          />
          <button className="bg-red-900 text-white py-2 rounded w-full hover:bg-red-800">
            Iniciar sesión
          </button>
        </form>

        <button
          onClick={handleGoogle}
          className="bg-red-500 text-white py-2 rounded w-full mt-4 hover:bg-red-600"
        >
          Iniciar con Google
        </button>
      </div>
    </div>
  );
}
