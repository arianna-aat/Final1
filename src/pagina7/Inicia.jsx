import { useState, useEffect } from "react"
import { auth } from "../firebase"
import Registro from "./Registro"
import Login from "./Login"
import Logout from "./Logout"
import { onAuthStateChanged } from "firebase/auth"

function Inicia() {
  const [user, setUser] = useState(null)
  

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  })

  return(
    <div className="min-h-screen
      flex flex-col
      items-center justify-center
      bg-gradient-to-br from-red-200 to-yellow-300">
      <div className="text-center">
        <h1
        className=" text-3xl font-bold mb-6 text-black"
        >Registrate</h1>
        {user?(
          <div className="bg-sky-200 p-6 rounded-2xl shadow-md">
            <h3>Bienvenid@, <span className="font-semibold">{user.email}</span></h3>
            <p className="text-gray-600">Ahora estás dentro</p>
            <Logout/>
          </div>
        ):(
          <div className="flex flex-col md:flex-row gap-6">
            <Registro/>
            <Login/>
          </div>
        )}
      </div>
        <div className="bg-blue-600 p-3 text-xl fixed bottom-4 right-4 rounded-lg shadow-lg">
         <a href="http://localhost:5173/"  class="text-white text-2xl font-semibold transition 
        hover:text-yellow-300 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.9)]" >
         Regresar
        </a>
      </div>
    </div>
  )
}
export default Inicia