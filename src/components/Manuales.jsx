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
    const [categorias, setCategorias] = useState([]);
    //const [manual, setManual] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [manualesFiltrados, setManualesFiltrados] = useState([]);

    //Categorias manuales
    useEffect(() => {
        axios.get('http://localhost:3000/api/categorias')
            .then(response => setCategorias(response.data))
            .catch(error => console.error("Error al cargar datos:", error));
    }, []);

    //Manuales
    useEffect(() => {
        //Carga todos los manuales
        axios.get('http://localhost:3000/api/empleadomanual')
            .then(response => setManuales(response.data))
            .catch(error => console.error("Error al cargar datos:", error));
    }, []);

    useEffect(() => {
        //Filtrar manuales cuando se selecciona una categoría
        if (categoriaSeleccionada) {
            const filtrados = manuales.filter(
                manual => manual.manual.id_categoria === categoriaSeleccionada.id_categoria
            );
            setManualesFiltrados(filtrados);
            console.log("categoria seleccionada: ", categoriaSeleccionada.nombre, "manuales", manualesFiltrados.map(manual => manual.manual.titulo));
        } else {
            setManualesFiltrados([]);
        }
    }, [categoriaSeleccionada, manuales]);

    return (
        <div className="grid grid-cols-3 gap-x-7 gap-y-3 mt-4.5 mb-4.5 text-xs w-auto pl-4">
            {/* cuando se de clic en una categoría de manual debe llamar a la api
                manuales y que filtre todos los manuales que cumplan con la condición
                de la categoría
            */}
            {categorias.map((categoria, i) => (
                <button
                    key={i}
                    onClick={() => setCategoriaSeleccionada(categoria)}
                    className="flex items-center justify-center border-2 outline-2 outline-[#9B0E0E] 
                  p-1 text-sm font-semibold text-[#9B0E0E] hover:bg-red-50 shadow-sm transition
                  ${ categoriaSeleccionada === nombre ? 'bg-[#9B0E0E] text-white' : 'bg-gray-200' "
                >
                    <img src={manualPng} className="w-5 h-5 mr-2 bg-[#9B0E0E]" />
                    {categoria.nombre || "Manuales"}
                </button>
            ))}
        </div>
    );
};

export default Manuales;