import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import Loader from "./Loader"

function Logout() {
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    try {
      await signOut(auth)
      alert("Seción cerrada exitosamente")
    } catch (error) {
      console.error(error)
      alert("Error al cerrar sesión.Intentel@ nuevamente")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="text-center mt-3">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        disabled={loading}
      >
        {loading ? "Cerrando..." : "Cerrar sesión"}
      </button>
      {loading && <Loader />}
    </div>
  )
}

export default Logout