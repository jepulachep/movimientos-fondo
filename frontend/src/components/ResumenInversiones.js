import React from 'react';

function ResumenInversiones({ movimientos }) {
  // Solo se suman movimientos COMPLETADOS para visualizar el total invertido
 const saldoPEN = 
  movimientos.filter(m => m.estado === 'COMPLETADO' && m.moneda === 'PEN' && m.tipoOperacion === 'SUSCRIPCION')
    .reduce((suma, m) => suma + m.monto, 0)  -
  movimientos.filter(m => m.estado === 'COMPLETADO' && m.moneda === 'PEN' && m.tipoOperacion === 'RESCATE')
    .reduce((suma, m) => suma + m.monto, 0);

const saldoUSD = 
    movimientos.filter(m => m.estado === 'COMPLETADO' && m.moneda === 'USD' && m.tipoOperacion === 'SUSCRIPCION').reduce((suma, m) => suma + m.monto, 0) -
    movimientos.filter(m => m.estado === 'COMPLETADO' && m.moneda === 'USD' && m.tipoOperacion === 'RESCATE').reduce((suma, m) => suma + m.monto, 0);
  
  // Se usan fondos únicos para no contar el mismo fondo dos veces
  const fondosActivos = new Set(movimientos.map(m => m.fondo)).size;

  // Operaciones pendientes de ejecutar, y verificar qué está en curso
  const enProceso = movimientos.filter(m => m.estado === 'EN_PROCESO').length;

  const fondosUnicos = [...new Set(movimientos.map(m => m.fondo))];
  const saldoFondos = fondosUnicos.map(fondo => {
  const moneda = movimientos.find(m => m.fondo === fondo).moneda;
  const suscripciones = movimientos
    .filter(m => m.fondo === fondo && m.estado === 'COMPLETADO' && m.tipoOperacion === 'SUSCRIPCION')
    .reduce((suma, m) => suma + m.monto, 0);
  const rescates = movimientos    .filter(m => m.fondo === fondo && m.estado === 'COMPLETADO' && m.tipoOperacion === 'RESCATE')
    .reduce((suma, m) => suma + m.monto, 0);
  
  return { fondo, moneda, saldo: suscripciones - rescates };
});
  return (
    <div>
      <div className="resumen">
        <div className="tarjeta">
          <h3>Saldo PEN</h3>
          <p>S/ {saldoPEN.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="tarjeta">
          <h3>Saldo USD</h3>
          <p>$ {saldoUSD.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</p>
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
      <div className="tarjeta saldo-fondos-row">
        <h3>Saldo por Fondo</h3>
        <div className="saldo-fondos-horizontal">
          {saldoFondos.map(f => (
            <p key={f.fondo} className="saldo-fondo-item">
              <span className="fondo-nombre">{f.fondo.replace(' PEN', '').replace(' USD', '')}</span>
              <span className="fondo-monto">{f.moneda === 'PEN' ? 'S/' : '$'} {f.saldo.toLocaleString('es-PE', { minimumFractionDigits: 2 })}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumenInversiones;