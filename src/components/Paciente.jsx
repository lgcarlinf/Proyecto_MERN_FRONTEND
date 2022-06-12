import usePacientes from "../hooks/usePacientes";

const Paciente = ({ paciente }) => {
  const { email, fecha, propietario, nombre, sintomas, _id } = paciente;

  const { editarPaciente ,eliminarPaciente} = usePacientes();

  const formatFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-800 my-2">
        Nombre:{" "}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-800 my-2">
        Propietario:{" "}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-800 my-2">
        Email de Contacto:{" "}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-800 my-2">
        Fecha de Ingreso:{" "}
        <span className="font-normal normal-case text-black">
          {formatFecha(fecha)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-800 my-2">
        Sintomas:{" "}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>
      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
          onClick={() => editarPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
          onClick={() => eliminarPaciente(paciente._id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
