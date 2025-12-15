import { useState } from "react"
function Formulario(){
    
    const [nombre,setNombre] = useState("")
    const [edad,setEdad] = useState("")
    const [correo,setCorreo] = useState("")
    const [mensaje,setMensaje] = useState("")

    const manejarEnvio = (e) => {
    e.preventDefault(); 

     if (!nombre || !edad || !correo || !mensaje){
        alert("Completar los datos")
        
    }
    else if (parseInt(edad)<=18 ){
        alert("Debe ser mayor de edad")
    }
    else if(!correo.includes("@") || !correo.includes(".")){
        alert("Colocar un correo válido")
    }
    else{
        console.log("Datos: ", nombre, edad,correo)
        alert("Gracias por comunicarse con nosotras")
    }

    }
    return(
        <div className="min-h-screen
      flex flex-col
      items-center justify-center
      bg-gradient-to-br from-sky-500 to-blue-200 ">
            <h1 className="text-center font-bold">Formulario de contacto</h1>
            <div className="flex flex-col rounded-2xl mx-auto w-100 bg-gray-200 p-10 text-xl ">
                <form onSubmit={manejarEnvio}>
                <label className="font-bold" >Nombre: </label>
                <input
                value={nombre} 
                onChange={(e)=>setNombre(e.target.value)}
                type="text" 
                className="border border-gray-400 rounded-xl text-gray-800 p-1 mr-10"/>

                <label className="font-bold">Edad: </label>
                <input value={edad}
                onChange={(e)=>setEdad(e.target.value)}
                type="number" 
                className="border border-gray-400 rounded-xl text-gray-800 p-1 mr-10"/>

                <label className="font-bold">Correo: </label>
                <input value={correo}
                onChange={(e)=>setCorreo(e.target.value)} 
                type="gmail" 
                className="border border-gray-400 rounded-xl text-gray-800 p-1 mr-10"/>

                <label className="font-bold" >Mensaje: </label>
                <input value={mensaje}
                onChange={(e)=>setMensaje(e.target.value)}
                type="text"
                placeholder="..." 
                className="w-80 h-40 border border-gray-400 rounded-xl text-gray-800 p-1"/>

                </form>
               <button onClick={manejarEnvio}className="bg-gray-400 border 
               rounded-xl w-20 cursor-pointer mt-2 hover:scale-105 
               duration-300 active:translate-y-1">Enviar</button>
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

export default Formulario