import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();
  // console.log(params);
  // const {nombre, email, telefono, empresa, notas} = cliente

  useEffect(() => {
    // setCargando(!cargando);
    const obtenerClienteAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setCargando(!cargando);
      }, 200);
    };
    obtenerClienteAPI();
  }, []);

  console.log(cargando);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar datos de un cliente
      </p>
      {cliente?.nombre ? (<Formulario cliente={cliente} cargando={cargando} />) : <p>Cliente ID no válido</p> }
    </>
  );
};

export default EditarCliente;
