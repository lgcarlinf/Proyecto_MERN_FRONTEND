import { useState } from "react";
import AdminNav from "../components/AdminNav";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

const CambiarPassword = () => {
  const [password, setPassword] = useState({ pwd_actual: "", pwd_nuevo: "" });
  const [alerta, setAlerta] = useState({});

  const { guardarPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(password).some((campo) => campo === "")) {
      return setAlerta({
        msg: "Todos los campos son Obligatorios",
        error: true,
      });
    }

    if (password.pwd_nuevo.length < 6) {
      return setAlerta({
        msg: "El Password debe tener más de 5 caracteres",
        error: true,
      });
    }

    const respuesta = await guardarPassword(password);
    setAlerta(respuesta);
  };

  const { msg } = alerta;

  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Password
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu {""}{" "}
        <span className="text-indigo-600 font-bold">Password</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600 ">
                Contraseña Actual
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_actual"
                placeholder="Escribe tu Contraseña Actual"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className="my-3">
              <label htmlFor="" className="uppercase font-bold text-gray-600 ">
                Contraseña Nueva
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_nuevo"
                placeholder="Escribe tu Nueva Contraseña"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>

            <input
              type="submit"
              value="Actualizar Contraseña"
              className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
