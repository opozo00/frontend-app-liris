const EmpleadoInfo = ({ empleado }) => {

    if (!empleado) return null;

    return (
        <div className="grid grid-cols-2 gap-2">
            <div>
                <h3 className="font-bold border-b text-sm mb-2">Empleado</h3>
                <div className="text-xs">
                    <p><strong>Usuario:</strong> {empleado.nombre} {empleado.apellido}</p>
                    <p><strong>Correo:</strong> {empleado.correo}</p>
                    <p><strong>Cargo:</strong> {empleado.cargo?.nombre}</p>
                    <p><strong>Departamento:</strong> {empleado.departamento?.nombre}</p>
                </div>
            </div>
            <div>
                <h3 className="font-bold border-b text-sm mb-2">Jerarquía</h3>
                <div className="text-xs p-1">
                    <p><strong>Posición Reporta A:</strong> {empleado.jefe?.cargo?.nombre || "Sin jefe asignado"}</p>
                    <p><strong>Reporta A:</strong> {empleado.jefe?.nombre} {empleado.jefe?.apellido || "Sin jefe asignado"}</p>
                    <p><strong>Línea de negocio:</strong> {empleado.departamento?.linea_negocio}</p>
                    <p><strong>Centro de Costo:</strong> {empleado.departamento?.ubicacion}</p>
                </div>

            </div>
        </div>
    );
}

export default EmpleadoInfo;