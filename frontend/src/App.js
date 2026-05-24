import React, { useState, useEffect } from 'react';
import ResumenInversiones from './components/ResumenInversiones';
import TablaMovimientos from './components/TablaMovimientos';
import './App.css';

function App() {
  const [movimientos, setMovimientos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/movimientos')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setMovimientos(datos);
        setCargando(false);
      })
      .catch(err => {
        setError('No se pudo cargar los movimientos. Intenta nuevamente.');
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando movimientos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app">
      <h1>Mis Inversiones</h1>
      <ResumenInversiones movimientos={movimientos} />
      <TablaMovimientos movimientos={movimientos} />
    </div>
  );
}

export default App;