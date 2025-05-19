// src/components/ManualesEmpleadoPorCategoria.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import manualPng from '../assets/manual-png.png';
import TablaManuales from './TablaManuales';

const ManualesEmpleadoPorCategoria = ({ idEmpleado }) => {
    const [empleadoManuales, setEmpleadoManuales] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const [manualesFiltrados, setManualesFiltrados] = useState([]);

    //Categorias manuales
    useEffect(() => {
        axios.get('http://localhost:3000/api/categorias')
            .then(response => setCategorias(response.data))
            .catch(error => console.error("Error al cargar datos:", error));
    }, []);

    //Manuales asignados al empleado
    useEffect(() => {
        axios.get('http://localhost:3000/api/empleadomanual/')
            .then(res => {
                const manualesEmpleado = res.data.filter(
                    item => item.id_empleado === idEmpleado.id_empleado
                );
                // console.log("Empleado: ", idEmpleado);
                // console.log("Response API: ", manualesEmpleado);
                setEmpleadoManuales(manualesEmpleado);
            })
            .catch(err => console.error('Error al cargar los manuales del empleado:', err));
    }, [idEmpleado]);

    // Se filtran los manuales dependiendo de la categoría seleccionada
    useEffect(() => {
        if (categoriaSeleccionada) {
            const filtrados = empleadoManuales.filter(
                item => item.manual.categoria.id_categoria === categoriaSeleccionada.id_categoria
            );
            console.log("FILTRADOS: ", filtrados);
            setManualesFiltrados(filtrados);
        } else {
            setManualesFiltrados([]);
        }
    }, [categoriaSeleccionada, empleadoManuales]);

    useEffect(() => {
        console.log("📌 categoriaSeleccionada actual:", categoriaSeleccionada);
    }, [categoriaSeleccionada]);

    useEffect(() => {
        console.log("📌 Manuales por usuario:", manualesFiltrados.map(item => item.manual.titulo));
    }, [manualesFiltrados]);

    // // Extraer categorías únicas desde los manuales asignados
    // const categorias = Array.from(
    //     new Set(empleadoManuales.map(item => item.manual.categoria.id_categoria))
    // );

    return (
        <>
            <div className="grid grid-cols-3 gap-x-7 gap-y-3 mt-4.5 mb-4.5 text-xs w-auto pl-4">
                {/* cuando se de clic en una categoría de manual debe llamar a la api
                        manuales y que filtre todos los manuales que cumplan con la condición
                        de la categoría
                    */}
                {categorias.map((categoria, i) => (
                    <button
                        key={i}
                        onClick={() => setCategoriaSeleccionada(categoria)}
                        className={`flex items-center justify-center border-2 outline-2 outline-[#9B0E0E] 
                        p-1 text-sm font-semibold text-[#9B0E0E] hover:bg-red-50 shadow-sm transition
                        ${categoriaSeleccionada?.id_categoria === categoria.id_categoria ? 'bg-[#9B0E0E] text-black' : 'bg-gray-200'}`}
                    >
                        <img src={manualPng} className="w-5 h-5 mr-2 bg-[#9B0E0E]" />
                        {categoria.nombre || "Manuales"}
                    </button>
                ))}
            </div>
            {/* Tabla de manuales filtrados */}
            <TablaManuales manuales={manualesFiltrados} />
        </>


    );
};

export default ManualesEmpleadoPorCategoria;