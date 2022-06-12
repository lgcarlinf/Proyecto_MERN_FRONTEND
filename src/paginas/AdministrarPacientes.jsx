import { useState } from "react";
import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";

const AdministrarPacientes = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <button
        type="button"
        className="bg-indigo-600 text-white font-bold uppercase mx-auto mt-10 p-4 rounded-md mb-10 md:hidden"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "Ocultar Fromulario" : "Mostrar Formulario"}
      </button>
      <div
        className={`${
          mostrarFormulario ? "block" : "hidden"
        } md:w-1/2 lg:w-2/5 md:block`}
      >
        <Formulario />
      </div>
      <div className="w-1/2 lg:w-3/5 ">
        <ListadoPacientes />
      </div>
    </div>
  );
};

export default AdministrarPacientes;