// src/components/EmpleadoList.jsx
import React, { useEffect, useState } from "react";
import axios from 'axios';

const EmpleadoList = () => {
    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/api/empleados')
            .then(response => {
                // console.log("----Respuesta del servidor----")
                // console.log(response.data);
                // console.log("----Posición 0----")
                // console.log(response.data[0].nombre);

                setEmpleados(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error al obtener empleados: ", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando empleados...</p>;

    return (
        <div>
            <h2>Lista de Empleados</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map(emp => (
                        <tr key={emp.id_empleado}>
                            <td>{emp.id_empleado}</td>
                            <td>{emp.nombre}</td>
                            <td>{emp.apellido}</td>
                            <td>{emp.correo}</td>
                            <td>{emp.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmpleadoList;