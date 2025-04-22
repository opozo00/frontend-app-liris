import { useState } from "react";

const TablaManuales = ({ data }) => {
    const [lectura, setLectura] = useState(false);
    return (
        <div className="overflow-x-auto">
            <table className="w-auto ml-3.5 mt-2 text-sm border border-gray-300 table-auto">
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                    <tr>
                        <th className="w-10 p-2 border-b border-gray-300 text-center">Estado</th>
                        <th className="p-2 border-b border-gray-300 min-w-[200px]">Documento</th>
                        <th className="p-2 border-b border-gray-300 min-w-[100px]">Tipo</th>
                        <th className="p-2 border-b border-gray-300 min-w-[110px]">Actualización</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((doc, idx) => (
                        <tr
                            key={doc.id}
                            className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                            <td className="text-center border-t p-2">
                                <input
                                    type="checkbox"
                                    checked={lectura}
                                    onClick={() => { setLectura(true) }}
                                />
                            </td>
                            <td className="border-t p-2 text-blue-700 hover:underline cursor-pointer">
                                {doc.manual.titulo}
                            </td>
                            <td className="border-t p-2 uppercase text-gray-800 text-center">
                                {doc.manual.tipo || "SISTEMAS"}
                            </td>
                            <td className="border-t p-2 text-gray-600 text-center">
                                {doc.manual.fecha_actualizacion}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaManuales;