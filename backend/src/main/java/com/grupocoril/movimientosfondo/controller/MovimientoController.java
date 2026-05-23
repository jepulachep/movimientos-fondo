package com.grupocoril.movimientosfondo.controller;

import com.grupocoril.movimientosfondo.model.Movimiento;
import com.grupocoril.movimientosfondo.service.MovimientoService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/movimientos")
@CrossOrigin(origins = "http://localhost:3000")
public class MovimientoController {

    private final MovimientoService movimientoService;

    public MovimientoController(MovimientoService movimientoService) {
        this.movimientoService = movimientoService;
    }

    @GetMapping
    public List<Movimiento> obtenerMovimientos() {
        return movimientoService.obtenerMovimientos();
    }
}
