import React from 'react';

function ResumenInversiones({ movimientos }) {
  // Solo se suman movimientos COMPLETADOS para visualizar el total invertido
  const totalInvertido = movimientos.filter(m => m.estado === 'COMPLETADO').reduce((suma, m) => suma + m.monto, 0);

  // Se usan fondos únicos para no contar el mismo fondo dos veces
  const fondosActivos = new Set(movimientos.map(m => m.fondo)).size;

  // Operaciones pendientes de ejecutar, y verificar qué está en curso
  const enProceso = movimientos.filter(m => m.estado === 'EN_PROCESO').length;

  return (
    <div className="resumen">
      <div className="tarjeta">
        <h3>Total Invertido</h3>
        <p>{totalInvertido}</p>
      </div>
      <div className="tarjeta">
        <h3>Fondos Activos</h3>
        <p>{fondosActivos}</p>
      </div>
      <div className="tarjeta">
        <h3>En Proceso</h3>
        <p>{enProceso}</p>
      </div>
    </div>
  );
}

export default ResumenInversiones;