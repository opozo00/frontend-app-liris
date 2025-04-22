const EmpleadoInfo = ({ empleado }) => {

    if (!empleado) return null;

    return (
        <div className="flex gap-4 ml-4">
            {/* Empleado */}
            <div className="inline-block w-1/2">
                <div className="font-bold border-b text-sm mb-2">Empleado</div>
                <table className="text-xs w-full">
                    <tbody>
                        <tr>
                            <td className="w-28 font-semibold align-top">Usuario:</td>
                            <td className="uppercase">{empleado.nombre} {empleado.apellido}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold align-top">Correo:</td>
                            <td>{empleado.correo}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold align-top">Cargo:</td>
                            <td>{empleado.cargo?.nombre}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold align-top">Departamento:</td>
                            <td>{empleado.departamento?.nombre}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Jerarquía */}
            <div className="inline-block w-1/2">
                <div className="font-bold border-b text-sm mb-2">Jerarquía</div>
                <table className="text-xs w-full">
                    <tbody>
                        <tr>
                            <td className="w-32 font-semibold align-top">Posición Reporta A:</td>
                            <td className="uppercase">{empleado.jefe?.cargo?.nombre || "Sin jefe asignado"}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold align-top">Reporta A:</td>
                            <td className="uppercase">{empleado.jefe?.nombre} {empleado.jefe?.apellido || "Sin jefe asignado"}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold align-top">Línea de negocio:</td>
                            <td className="uppercase">{empleado.departamento?.linea_negocio}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold align-top">Centro de Costo:</td>
                            <td className="uppercase">{empleado.departamento?.ubicacion}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default EmpleadoInfo;