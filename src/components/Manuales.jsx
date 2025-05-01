import manualPng from '../assets/manual-png.png';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
// const manuales = [
//     "Manual de funciones",
//     "Manual de procedimientos",
//     "Manual de usuario",
//     "Procedimientos generales",
//     "Notiliris",
//     "Registro Oficial",
// ]

const Manuales = ({ onFilter }) => {
    const [manuales, setManuales] = useState([]);
    const [manual, setManual] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/categorias')
            .then(response => setManuales(response.data))
            .catch(error => console.error("Error al cargar datos:", error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/api/manuales')
            .then(response => setManual(response.data))
            .catch(error => console.error("Error al cargar datos:", error));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-x-7 gap-y-3 mt-4.5 mb-4.5 text-xs w-auto pl-4">
            {manuales.map((titulo, i) => (
                <button onClick={() => console.log(manual.filter((item) => item.categoria.nombre === 'Manual de Usuario'))} key={i} className="flex items-center justify-center border-2 outline-2 outline-[#9B0E0E] p-1 text-sm font-semibold text-[#9B0E0E] hover:bg-red-50 shadow-sm transition ">
                    <img src={manualPng} className="w-5 h-5 mr-2 bg-[#9B0E0E]" />
                    {titulo.nombre}
                </button>
            ))}
        </div>
    );
};

export default Manuales;