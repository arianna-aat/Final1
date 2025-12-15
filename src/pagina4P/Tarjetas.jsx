
function Tarjeta({nombre, descripcion,enlace}){
return(
    /*<div>
        <div className="w-60 rounded-xl bg-gray-200 p-4 cursor-pointer hover:scale-105 duration-200 active:translate-y-5 transition-transform ">
            <h3 className="font-bold cursor-pointer hover:scale-105 duration-100">Nombre: {nombre}</h3>
            <p>{descripcion}</p>
            <p>Usamos {tecnologias}</p>
        </div>
    </div>
    */

     <div className="flex flex-wrap  mx-auto">
    <div className="">
      <div className=" bg-white p-4 w-100 hover:scale-105 duration-300 cur">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={enlace} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{nombre}</h1>
            <p className="leading-relaxed mb-3"> {descripcion}</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>10k
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>99+
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 p-3 text-xl fixed bottom-4 right-4 rounded-lg shadow-lg">
         <a href="http://localhost:5173/"  class="text-white text-2xl font-semibold transition 
        hover:text-yellow-300 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.9)]" >
         Regresar
        </a>
      </div>
    </div>
  </div>
)

}

export default Tarjeta