const educacion = [
  { periodo: "2025 - Actualidad", descripcion: "Ingeniería en informática DUOC UC" },
  { periodo: "2019 - 2024", descripcion: "Licenciatura en Ciencias Naturales y Matemáticas Universidad Católica (Incompleto)." },
  { periodo: "2007-2018", descripcion: "Colegio San Francisco de Asís de La Florida." },
];

const proyectos = [
  {
    titulo: "Proyecto 1",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPaFI23qHnYL3o3aoAqro-rNF2eivIFtgXb0NRVKIfA&s=10",
    descripcion: "Catálogo de plantas",
    claseImagen: "object-cover rounded-md shadow-sm",
  },
  {
    titulo: "Proyecto 2",
    imagen: "https://cdn-icons-png.flaticon.com/512/5521/5521112.png",
    descripcion: "Aplicación móvil",
    claseImagen: "object-contain",
  },
];

function Contenido() {
  return (

    <main id="Sobre_mi" className="max-w-4xl mx-auto p-6 space-y-12">

      {/*sobre mí */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-center gap-6 dark:bg-gray-800 dark:border-gray-700">
        <img
          src="https://i.pinimg.com/736x/2e/79/2b/2e792bf2201fe90235593e994c222dca.jpg"
          className="w-40 h-40 rounded-full object-cover border-4 border-fuchsia-500 shrink-0"
          alt="Foto de perfil de Aisleen Cerón"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold text-black mb-2 dark:text-white">Sobre mí</h1>
          <p className="text-gray-700 dark:text-white">
            Estudiante de Ingeniería en Informática de DUOC UC en segundo año.
          </p>
        </div>
      </section>

      {/*educacion*/}
      <section id="CV" className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-2xl font-bold mx-10 text-black mb-4 border-b pb-2 dark:text-white">Educación</h1>
        <ol className="relative lg:ml-10">
          {/* .map() recorre el arreglo y crea un <li> por cada elemento; key ayuda a React a identificarlos */}
          {educacion.map((item) => (
            <li key={item.periodo} className="relative pb-8 pl-8 border-l-2 border-gray-300">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-fuchsia-500 border-2 border-white"></span>
              <p className="text-sm font-bold text-fuchsia-600 mb-1 dark:text-white">{item.periodo}</p>
              <p className="text-gray-700 dark:text-white">{item.descripcion}</p>
            </li>
          ))}
        </ol>
      </section>

      {/*portafolio */}
      <section id="Portafolio" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-black mb-4 border-b pb-2 mx-10 dark:text-white">Portafolio</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 lg:mx-10 dark:bg-gray-900">
          {proyectos.map((proyecto) => (
            <li key={proyecto.titulo} className="border rounded-lg p-4 flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800">
              <h2 className="text-lg font-semibold mb-3 dark:text-white">{proyecto.titulo}</h2>
              <img
                src={proyecto.imagen}
                className={`w-40 h-40 mb-3 ${proyecto.claseImagen}`}
                alt={proyecto.descripcion}
              />
              <p className="text-gray-600 dark:text-white">{proyecto.descripcion}</p>
            </li>
          ))}
        </ul>
      </section>

      {/*contacto */}
      <section id="Contacto" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4 border-b pb-2 dark:text-white">Contacto</h1>
        <ul className="space-y-2 text-gray-700 dark:text-white">
          <li>
            <strong className="font-medium">Correo:</strong>{" "}
            <a href="mailto:fernandaceron2000@gmail.com" className="text-indigo-600 underline hover:text-indigo-800 dark:text-indigo-400">
              fernandaceron2000@gmail.com
            </a>
          </li>
          <li><strong className="font-medium">Teléfono:</strong> +56988904193</li>
        </ul>
      </section>

    </main>
  );
}

export default Contenido;