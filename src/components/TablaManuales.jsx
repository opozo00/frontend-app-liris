import React, { useState, useEffect } from "react";
import axios from 'axios';
import Manuales from "./Manuales";



const TablaManuales = ({ manuales }) => {
    const [lectura, setLectura] = useState(false);
    const [paginaActual, setPaginaActual] = useState(1);
    const [busqueda, setBusqueda] = useState("");
    const maximoManuales = 15;

    // const [manualEmpleado, setmanualEmpleado] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/empleadomanual/')
    //         .then(response => setmanualEmpleado([]))
    //         .catch(error => console.error("Error al cargar datos:", error));
    // }, []);

    const estadoLectura = (event) => {
        setLectura(event.target.checked);
    }

    const calculateProgress = () => {
        const totalCount = checkbox
    };


    // const filtrarBusqueda = manualEmpleado.filter(doc =>
    //     doc.manual?.titulo?.includes(busqueda)
    // );

    // const paginasTotales = Math.ceil(filtrarBusqueda.length / maximoManuales);

    // const currentItems = filtrarBusqueda.slice(
    //     (paginaActual - 1) * maximoManuales,
    //     paginaActual * maximoManuales
    // );

    // const nextPagina = () => {
    //     if (paginaActual < paginasTotales) setPaginaActual(paginaActual + 1);
    // };

    // const backPagina = () => {
    //     if (paginaActual > 1) setPaginaActual(paginaActual - 1);
    // };

    // //se reinicia página a 1
    // const handleBusqueda = (e) => {
    //     setBusqueda(e.target.value);
    //     setPaginaActual(1);
    // };

    return (
        <div className="overflow-x-auto min-w-[650px]">
            {/* Buscador */}
            <table className="w-auto min-w-[650px] ml-3.5 mt-2 text-sm border border-gray-300 table-auto">
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                    <tr>
                        <th className="w-10 p-2 border-b border-gray-300 text-center">Estado</th>
                        <th className="p-2 border-b border-gray-300 min-w-[200px]">Documento</th>
                        <th className="p-2 border-b border-gray-300 min-w-[100px]">Tipo</th>
                        <th className="p-2 border-b border-gray-300 min-w-[110px]">Actualización</th>
                    </tr>
                </thead>
                <tbody>
                    {manuales.length > 0 ? (
                        manuales.map((doc, idx) => (
                            <tr
                                key={doc.id}
                                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                            >
                                <td className="text-center border-t p-2">
                                    <input
                                        type="checkbox"
                                        checked={lectura}
                                        onChange={estadoLectura} readOnly
                                    />
                                </td>
                                <td className="border-t p-2 text-blue-700 hover:underline cursor-pointer">
                                    {doc.manual.titulo}
                                </td>
                                <td className="border-t p-2 uppercase text-gray-800 text-center">
                                    {/* {doc.manual.tipo || "SISTEMAS"} */}
                                    {doc.manual.departamento.nombre || "SISTEMAS"}
                                </td>
                                <td className="border-t p-2 text-gray-600 text-center">
                                    {doc.manual.fecha_actualizacion}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center p-4 text-gray-500">
                                No se encontraron documentos.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* Controles de paginación
            <div className="flex justify-end mt-2 pr-1 text-sm text-gray-700 gap-2">
                <button
                    onClick={backPagina}
                    disabled={paginaActual === 1}
                    className="px-2 py-1 border rounded disabled:opacity-50"
                >
                    Anterior
                </button>
                <span className="self-center">Página {paginaActual} de {paginasTotales}</span>
                <button
                    onClick={nextPagina}
                    disabled={paginaActual === paginasTotales}
                    className="px-2 py-1 border rounded disabled:opacity-50"
                >
                    Siguiente
                </button>
            </div> */}
        </div>
    );
};

export default TablaManuales;