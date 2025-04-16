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

    if (!empleado) return <p>Cargando...</p>

    return (
        <div className="flex h-screen">

            {/* Columna izquierda */}
            <div className="w-1/2 p-2 border-r overflow-y-auto">
                <div className="flex items-center mb-6 border-b">
                    <img src={logo} alt="LIRIS Logo" className="h-12 mr-4" />
                    <h2 className="text-l font-semibold text-end w-full">Mis Procedimientos</h2>
                </div>

                <InfoEmpleado empleado={empleado} />
                <Manuales />
                <BarraBuscadora progreso={66.6} onBuscar={(valor) => console.log("Buscar:", valor)} />
                <TablaManuales />



            </div>

            {/* Columna derecha */}
            <div className="w-1/2 p-8 overflow-y-auto">
                <p className="text-gray-500">Selecciona un manual para visualizarlo aquí.</p>
            </div>
        </div>
    );
};

export default Empleado;