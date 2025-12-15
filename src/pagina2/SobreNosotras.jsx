
import Miembro_samira from "./miembros/miembro_samira";
import Miembro_arianna from "./miembros/miembro_ariana";
import Miembro_daisuki from "./miembros/miembro_daisuki";
import Miembro_abigail from "./miembros/miembro_abigail";


function SobreNosotras() {
  return (
    <div className="min-h-screen flex flex-col 
    items-center justify-center 
    bg-gradient-to-br from-red-100 to-yellow-300 gap-6">
      <div className="bg-gray-100 p-6 rounded-lg w-1/2 max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-lg font-serif">
          Miembros del equipo
        </h1>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        <Miembro_samira />
        <Miembro_arianna />
        <Miembro_daisuki />
        <Miembro_abigail />
      </div>
         <div className="bg-blue-600 p-3 text-xl fixed bottom-4 right-4 rounded-lg shadow-lg">
         <a href="http://localhost:5173/"  class="text-white text-2xl font-semibold transition 
        hover:text-yellow-300 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.9)]" >
         Regresar
        </a>
      </div>
    </div>
  );
}

export default SobreNosotras