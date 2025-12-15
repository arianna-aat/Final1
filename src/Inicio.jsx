import Nombre from "./pagina1/Nombre";
import Botones from "./pagina1/Botones";
import Contenido from "./pagina1/Contenido1";

function Inicio() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-sky-200 to-blue-600 relative">
    

      <div className="flex items-center justify-between w-full bg-white p-4 z-10 relative">
        <div className="flex-shrink-0">
          <Nombre />
        </div>
        <div className="flex-shrink-0">
          <Botones />
        </div>
      </div>

      <div className="flex-1 p-4 bg-blu">
        
        <Contenido />
         
         
      </div>
       
    </div>
  );
}

export default Inicio;