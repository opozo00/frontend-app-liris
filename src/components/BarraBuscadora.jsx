import React from 'react';

const BarraBuscadora = ({ progreso = 66.6, onBuscar }) => {
    return (
        <div className="bg-[#6D89A1] ml-3.5 p-2 rounded-md flex justify-between items-center gap-4 h-auto shadow-md">
            {/* Barra de Progreso */}
            <div className="flex flex-col items-center w-1/2">
                <div className="text-white text-sm mb-1 text-center">
                    {progreso.toFixed(1)} %<br />Completado
                </div>
                <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-500 rounded-full transition-all duration-300"
                        style={{ width: `${progreso}%` }}
                    />
                </div>
            </div>

            {/* Input de búsqueda */}
            <div className="relative w-1/2">
                <input
                    type="text"
                    placeholder="Busca documentos"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-[#95A8BE] text-[#9B0E0E] placeholder-[#9B0E0E] focus:outline-none"
                    onChange={(e) => onBuscar?.(e.target.value)}
                />
                <span className="absolute left-3 top-2.5 text-[#9B0E0E]">🔍</span>
            </div>
        </div>
    );
};

export default BarraBuscadora;


// return (
//     <div className="mb-3 xl:w-75">
//         <div className="relative mb-4 ml-75 flex w-full flex-wrap items-stretch">
//             <input
//                 type="search"
//                 className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
//                 placeholder="Búsqueda de documentos:"
//                 aria-label="Buscar"
//                 aria-describedby="button-addon2" />

//             {/* <!--Search icon--> */}
//             <span
//                 className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
//                 id="basic-addon2">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     className="h-5 w-5">
//                     <path
//                         fillRule="evenodd"
//                         d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
//                         clipRule="evenodd" />
//                 </svg>
//             </span>
//         </div>
//     </div>
// );