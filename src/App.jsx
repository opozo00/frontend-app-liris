// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Empleado from './components/EmpleadoLayout';

function App() {
  const [empleado, setEmpleado] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/empleados/1')
      .then(response => setEmpleado(response.data))
      .catch(error => console.error("Error al cargar datos:", error));
  }, []);
  return <Empleado empleado={empleado} />;
}

export default App;

