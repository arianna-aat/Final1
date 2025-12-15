import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "./Loader";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const manejoRegistro = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registro exitoso!");
      setEmail("");
      setPassword("");
    } catch (error) {
      const mensajes = {
        "auth/email-already-in-use": "El correo ya está registrado.",
        "auth/invalid-email": "El correo no es válido.",
        "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
      };
      alert(mensajes[error.code] || "Error al registrarse. Inténtal nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-sky-200 shadow-md rounded-2xl p-6 w-80 mx-auto mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>

      <form onSubmit={manejoRegistro} className="flex flex-col gap-3">
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
          className="bg-yellow-300 text-white text-xl  rounded-lg py-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
        {loading && <Loader />}
      </form>
    </div>
  );
}

export default Registro;
