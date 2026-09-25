import { useState, useEffect } from "react";

function Navbar() {
    //menu hamburguesa
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);

  //
  useEffect(() => {
    document.documentElement.classList.toggle("dark", modoOscuro);
  }, [modoOscuro]);

  return (
    /*sticky top-0 mantiene la barra arriba al scrollear, z-10 la pone sobre las imágenes */
    <header className="bg-fuchsia-500 text-white shadow-md sticky top-0 z-10">

      <nav className="p-4 flex justify-between items-center relative">
        
        {/*titulo*/}
        <span className="text-lg font-bold uppercase tracking-wider">Aisleen Cerón</span>

        <div className="flex items-center gap-6">
          {/*menu de enlaces: en celular se muestra solo si menuAbierto es true */}
          <div
            id="menu"
            className={`${menuAbierto ? "flex" : "hidden"} absolute top-full right-0 w-1/2 bg-fuchsia-500 p-4 flex-col space-y-3 shadow-lg lg:static lg:flex lg:flex-row lg:w-auto lg:p-0 lg:space-y-0 lg:space-x-6 lg:shadow-none font-bold text-sm tracking-wider text-center`}
          >
            <a href="#CV" className="hover:text-indigo-200 transition py-1">CV</a>
            <a href="#Portafolio" className="hover:text-indigo-200 transition py-1">Portafolio</a>
            <a href="#Contacto" className="hover:text-indigo-200 transition py-1">Contacto</a>
          </div>

          {/* Botón de modo oscuro: muestra la luna o el sol según el estado */}
          <button
            onClick={() => setModoOscuro(!modoOscuro)}
            className="p-1 rounded focus:outline-none hover:text-indigo-200"
            aria-label="Cambiar modo oscuro">

            {modoOscuro ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Botón hamburguesa, pantallas pequeñas*/}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="block lg:hidden focus:outline-none p-1 rounded"
            aria-label="Abrir menú"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </nav>

    </header>
  );
}

export default Navbar;