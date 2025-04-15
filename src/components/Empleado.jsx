import React, { useEffect, useState } from "react";
import axios from 'axios';

const Empleado = ({ empleado }) => {

    if (!empleado) return <p>Cargando...</p>

    return (
        <div className="flex h-screen">
            <div className="w-1/2 p-8 border-r overflow-y-auto">
                <div className="flex items-center mb-6">
                    <img src="src\assets\Logo-Liris.png" alt="LIRIS Logo" className="h-12 mr-4" />
                    <h2 className="text-xl font-semibold text-center w-full">Mis Procedimientos</h2>
                </div>

                <div className="mb-6">
                    <h3 className="text-sm font-bold border-b mb-2">Empleado</h3>
                    <p><strong>Usuario:</strong> {empleado.nombre} {empleado.apellido}</p>
                    <p><strong>Correo:</strong> {empleado.correo}</p>
                    <p><strong>Cargo:</strong> {empleado.cargo.nombre}</p>
                    <p><strong>Departamento:</strong> {empleado.departamento.nombre}</p>
                </div>

                <div>
                    <h3 className="text-sm font-bold border-b mb-2">Jerarquía</h3>
                    <p><strong>Posición Reporta A:</strong> {empleado.jefe.cargo.nombre}</p>
                    <p><strong>Reporta A:</strong> {empleado.jefe.nombre}</p>
                    <p><strong>Línea de negocio:</strong> {empleado.departamento.linea_negocio}</p>
                    <p><strong>Centro de Costo:</strong> {empleado.departamento.ubicacion}</p>
                </div>
            </div>

            <div className="w-1/2 p-8 overflow-y-auto">
                <p className="text-gray-500">Selecciona un procedimiento para visualizarlo aquí.</p>
            </div>
        </div>
    );
};

export default Empleado;