//Librerias
import React, { useEffect, useState } from "react";
import axios from 'axios';

//Componentes
import BarraBuscadora from "./BarraBuscadora";
import InfoEmpleado from "./EmpleadoInfo";
import Manuales from "./Manuales";
import TablaManuales from "./TablaManuales";

//Imagen
import logo from '../assets/Logo-Liris.png';

const Empleado = ({ empleado }) => {

    const [manualEmpleado, setmanualEmpleado] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/empleadomanual/')
            .then(response => setmanualEmpleado(response.data))
            .catch(error => console.error("Error al cargar datos:", error));
    }, []);

    if (!empleado) return <p className="p-4">Cargando...</p>;

    return (
        <div className="flex h-screen">
            {/* Columna izquierda */}
            <div className="w-2/3 p-2 border-r-3 border-gray-300 overflow-y-auto">
                {/* Encabezado */}
                <div className="flex items-center mb-6 border-b pb-3">
                    <img src={logo} alt="LIRIS Logo" className="h-12 mr-4" />
                    <h2 className="text-lg font-semibold text-gray-700 w-full text-right">
                        Mis Procedimientos
                    </h2>
                </div>

                {/* Información del empleado y manuales */}
                <div className="space-y-6">
                    <InfoEmpleado empleado={empleado} />
                    <Manuales />
                    <BarraBuscadora progreso={66.6} onBuscar={(valor) => console.log("Buscar:", valor)} />
                    <TablaManuales />
                </div>
            </div>

            {/* Columna derecha */}
            <div className="w-1/3 p-6 overflow-y-auto">
                <h3 className="text-md font-medium text-gray-700 mb-2">Vista previa del documento</h3>
                <div className="border rounded p-4 text-gray-500 text-sm">
                    Selecciona un manual para visualizarlo aquí.
                </div>
            </div>
        </div>
    );
};

export default Empleado;