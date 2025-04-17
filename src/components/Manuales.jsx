import manualPng from '../assets/manual-png.png';
const manuales = [
    "Manual de funciones",
    "Manual de procedimientos",
    "Manual de usuario",
    "Procedimientos generales",
    "Notiliris",
    "Registro Oficial",
]


const Manuales = () => {
    return (
        <div className="grid grid-cols-3 gap-x-7 gap-y-3 mt-4.5 mb-4.5 text-xs w-auto pl-4">
            {manuales.map((titulo, i) => (
                <button key={i} className="flex items-center justify-center border-2 outline-2 outline-[#9B0E0E] p-1 text-sm font-semibold text-[#9B0E0E] hover:bg-red-50 shadow-sm transition ">
                    <img src={manualPng} className="w-5 h-5 mr-2 bg-[#9B0E0E]" />
                    {titulo}
                </button>
            ))}
        </div>
    );
};

export default Manuales;