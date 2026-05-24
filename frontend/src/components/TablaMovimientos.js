import React from 'react';

function TablaMovimientos({ movimientos }) {
  return (
    <table>
      <thead>
        <tr>
            <th>Nº Operaciones</th>
            <th>Fondo</th>
            <th>Operacion</th>
            <th>Estado</th>          
            <th>Monto</th>
            <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {movimientos.map(m => (
          <tr key={m.id}>
            <td>{m.numeroOperacion}</td>
            <td>{m.fondo}</td>
            <td>{m.tipoOperacion}</td>
            <td>
                <span className={
                    m.estado === 'COMPLETADO' ? 'estado-completado' : m.estado === 'EN_PROCESO' ? 'estado-en-proceso' : 'estado-rechazado' }>
                         {m.estado}
                </span>
            </td>
            <td>{m.moneda} {m.monto}</td>
            <td>{m.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaMovimientos;