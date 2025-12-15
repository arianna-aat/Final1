import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Loader from "./Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const manejoLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso!");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Hubo un error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-sky-200 shadow-md rounded-2xl p-6 w-80 mx-auto mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
      <form onSubmit={manejoLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Correo"
          className="border rounded-lg p-2 bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border rounded-lg p-2 bg-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-sky-500 text-white text-xl rounded-lg py-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Entrar"}
        </button>
        {loading && <Loader />}
      </form>
    </div>
  );
}

export default Login