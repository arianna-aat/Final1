import { Link } from 'react-router-dom';
function Botones(){
return(
    <div className='contenedor'>
        <nav className='bg-white text-black  flex gap-10 font-bold w-full h-1   ' >
        <Link to={"/"} className='hover:scale-105 duration-100'>Inicio</Link>
        <Link to={"/sobre-nosotras"} className='hover:scale-105 duration-100'>Sobre nosotras</Link>
        <Link to={"/proyectos"} className='hover:scale-105 duration-100'>Proyectos</Link>
        <Link to={"/calculadora-profesional"}className='hover:scale-105 duration-100'>Calculadora profesional</Link>
        <Link to={"/formulario-contacto"}className='hover:scale-105 duration-100'>Formulario de contacto</Link>
        <Link to={"/comentarios"}className='hover:scale-105 duration-100'>Enviar comentarios</Link>
        <Link to={"/inicia"}className='hover:scale-105 duration-100'>Iniciar Sesion</Link>
        </nav>
        
    </div>
)
}

export default Botones