import Nombre from "./pagina1/Nombre";
import Botones from "./pagina1/Botones";
import SobreNosotras from "./pagina2/SobreNosotras";
import Calculadora from "./pagina3/Calculadora";
import Proyectos from "./pagina4P/Proyectos";
import Formulario from "./pagina5/Formulario";
import Contenido from "./pagina1/Contenido1";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import Inicio from "./Inicio";
import Comentarios from "./pagina6/Comentarios";
import Inicia from "./pagina7/Inicia";
function App() {
  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotras" element={<SobreNosotras />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/calculadora-profesional" element={<Calculadora />} />
        <Route path="/formulario-contacto" element={<Formulario />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/inicia" element={<Inicia/>}/>
        
      </Routes>
    </HashRouter>
  );
}

export default App;
