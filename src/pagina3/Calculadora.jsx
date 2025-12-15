import { useState } from "react";

function Calculadora() {
    const [experiencia, setExperiencia] = useState("")
    const [educacion, setEducacion] = useState("")
    const [conocimiento, setConocimiento] = useState("")
    const [idiomas, setIdiomas] = useState("")
    const [equipo, setEquipo] = useState("")
    const [perfil, setPerfil] =useState("")
    const calcularPerfil = (e) =>{
        e.preventDefault(); 
        let puntos = 0;

 
  if (experiencia >= 5) puntos += 3;
  else if (experiencia >= 2) puntos += 2;
  else puntos += 1;

 
  switch (educacion) {
    case "Postgrado": puntos += 3; break;
    case "Universitario": puntos += 2; break;
    case "Técnico": puntos += 1; break;
  }


  switch (conocimiento) {
    case "Avanzado": puntos += 3; break;
    case "Intermedio": puntos += 2; break;
    case "Básico": puntos += 1; break;
  }

  if (idiomas >= 2) puntos += 2;
  else if (idiomas === 1) puntos += 1;


  switch (equipo) {
    case "Avanzado": puntos += 3; break;
    case "Intermedio": puntos += 2; break;
    case "Básico": puntos += 1; break;
  }

 let resultado = "Perfil Junior";
if (puntos >= 12) resultado = "Perfil Senior";
else if (puntos >= 7) resultado = "Perfil Intermedio";

setPerfil(resultado);
    }
 return(
     <div className="min-h-screen flex flex-col 
    items-center justify-center 
    bg-gradient-to-br from-red-200 to-yellow-300">
    <h1 className="text-black font-bold text-center">Calculadora de Perfil Profesional</h1>

    <form id="perfilForm " className="flex flex-col w-80 mx-auto bg-gray-200 p-8 pb-10 rounded-xl shadow-2xl">
      <label for="experiencia" className="font-bold">Años de experiencia:</label>
      <input type="number" className="border border-gray-800 rounded-lg" min="0" value={experiencia} onChange={(e)=>setExperiencia(e.target.value)}/>

      <label for="educacion" className="font-bold">Nivel de educación:</label>
      <select className="border border-gray-800 rounded-lg" value={educacion} onChange={(e)=>setEducacion(e.target.value)}>
        <option value="Secundaria">Secundaria</option>
        <option value="Técnico">Técnico</option>
        <option value="Universitario">Universitario</option>
        <option value="Postgrado">Postgrado</option>
      </select>

      <label for="conocimiento" className="font-bold">Nivel de conocimiento (en programación):</label>
      <select className="border border-gray-800 rounded-lg" value={conocimiento} onChange={(e)=>setConocimiento(e.target.value)}>
        <option value="Básico">Básico</option>
        <option value="Intermedio">Intermedio</option>
        <option value="Avanzado">Avanzado</option>
      </select>

      <label for="idiomas" className="font-bold">Idiomas adicionales al español:</label>
      <input type="number" className="border border-gray-800 rounded-lg" min="0" value={idiomas} onChange={(e)=>setIdiomas(e.target.value)} />

      <label for="equipo" className="font-bold">Capacidad de trabajo en equipo:</label>
      <select className="border border-gray-800 rounded-lg" value={equipo} onChange={(e)=>setEquipo(e.target.value)}>
        <option value="Básico">Básico</option>
        <option value="Intermedio">Intermedio</option>
        <option value="Avanzado">Avanzado</option>
      </select>

      <button type="button" onClick={calcularPerfil} 
      className="bg-blue-500 border border-gray-800 rounded-lg cursor-pointer mt-10 font-bold  hover:scale-105 duration-200 active:translate-y-1 "
      >
        Calcular Perfil</button>

    <div className="text-center">Su perfil es: <p className="font-bold">{perfil}</p></div>
    </form>
 <div className="bg-blue-600 p-3 text-xl fixed bottom-4 right-4 rounded-lg shadow-lg">
         <a href="http://localhost:5173/"  class="text-white text-2xl font-semibold transition 
        hover:text-yellow-300 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.9)]" >
         Regresar
        </a>
      </div>
  </div>
)

}
export default Calculadora;