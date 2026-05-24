package com.grupocoril.movimientosfondo.service;

import com.grupocoril.movimientosfondo.model.Movimiento;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
public class MovimientoService {

    public List<Movimiento> obtenerMovimientos() {
        return List.of(
            new Movimiento(1L, "OP-2026-001", "Fondo Renta Fija PEN", "SUSCRIPCION", "COMPLETADO", new BigDecimal("2000.00"), "PEN", LocalDate.of(2026, 4, 5)),
            new Movimiento(2L, "OP-2026-002", "Fondo Renta Fija PEN", "RESCATE", "COMPLETADO", new BigDecimal("500.00"), "PEN", LocalDate.of(2026, 4, 20)),
            new Movimiento(3L, "OP-2026-003", "Fondo Crecimiento USD", "SUSCRIPCION", "COMPLETADO", new BigDecimal("1000.00"), "USD", LocalDate.of(2026, 4, 10)),
            new Movimiento(4L, "OP-2026-004", "Fondo Crecimiento USD", "RESCATE", "COMPLETADO", new BigDecimal("200.00"), "USD", LocalDate.of(2026, 5, 1)),
            new Movimiento(5L, "OP-2026-005", "Fondo Conservador PEN", "SUSCRIPCION", "COMPLETADO", new BigDecimal("3000.00"), "PEN", LocalDate.of(2026, 3, 15)),
            new Movimiento(6L, "OP-2026-006", "Fondo Conservador PEN", "RESCATE", "EN_PROCESO", new BigDecimal("800.00"), "PEN", LocalDate.of(2026, 5, 20)),
            new Movimiento(7L, "OP-2026-007", "Fondo Crecimiento USD", "SUSCRIPCION", "COMPLETADO", new BigDecimal("500.00"), "USD", LocalDate.of(2026, 5, 10)),
            new Movimiento(8L, "OP-2026-008", "Fondo Renta Fija PEN", "SUSCRIPCION", "RECHAZADO", new BigDecimal("1000.00"), "PEN", LocalDate.of(2026, 5, 18))
        );
    }
}