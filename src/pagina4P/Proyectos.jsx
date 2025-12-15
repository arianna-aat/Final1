import Tarjeta from "./Tarjetas"
import proyecto from "./data/Proyectos.json"
function Proyectos(){
    return(
<div className="bg-amber-200">
    <h1 className="text-blue-500 font-bold  mb-10 text-center">Proyectos</h1>
    <div className="flex flex-wrap gap-4 mx-auto">
        {proyecto.map(p=>
            <Tarjeta
            key={p.id}
            nombre={p.nombre}
            descripcion={p.descripcion}
            tecnologias={p.tecnologias}
            />
        )}
    </div>
</div>
        
        
    )
}

export default Proyectos