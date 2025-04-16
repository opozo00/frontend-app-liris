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
        <div className="grid grid-cols-3 gap-2 mt-4.5 mb-4.5">
            {manuales.map((titulo, i) => (
                <button key={i} className="flex items-center justify-center border-2 p-2 text-sm font-semibold group-[.peer:checked+&]:fill-red">
                    <img src="/assets/manual-icon.png" className="w-5 h-5 mr-2" />
                    {titulo}
                </button>
            ))}
        </div>
    );
};

export default Manuales;