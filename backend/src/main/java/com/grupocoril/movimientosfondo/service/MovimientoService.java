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
            new Movimiento(1L, "OP-2026-001", "Fondo Conservador", "SUSCRIPCION",
                "COMPLETADO", new BigDecimal("1500.00"), "PEN", LocalDate.of(2026, 5, 10)),
            new Movimiento(2L, "OP-2026-002", "Fondo Moderado", "RESCATE",
                "EN_PROCESO", new BigDecimal("800.00"), "USD", LocalDate.of(2026, 5, 15)),
            new Movimiento(3L, "OP-2026-003", "Fondo Agresivo", "SUSCRIPCION",
                "COMPLETADO", new BigDecimal("2000.00"), "PEN", LocalDate.of(2026, 5, 18)),
            new Movimiento(4L, "OP-2026-004", "Fondo Conservador", "RESCATE",
                "RECHAZADO", new BigDecimal("500.00"), "PEN", LocalDate.of(2026, 5, 20))
        );
    }
}