package com.grupocoril.movimientosfondo.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Movimiento {

    private Long id;
    private String numeroOperacion;
    private String fondo;
    private String tipoOperacion;
    private String estado;
    private BigDecimal monto;
    private String moneda;
    private LocalDate fecha;

    public Movimiento(Long id, String numeroOperacion, String fondo, String tipoOperacion,
                      String estado, BigDecimal monto, String moneda, LocalDate fecha) {
        this.id = id;
        this.numeroOperacion = numeroOperacion;
        this.fondo = fondo;
        this.tipoOperacion = tipoOperacion;
        this.estado = estado;
        this.monto = monto;
        this.moneda = moneda;
        this.fecha = fecha;
    }

    public Long getId() { return id; }
    public String getNumeroOperacion() { return numeroOperacion; }
    public String getFondo() { return fondo; }
    public String getTipoOperacion() { return tipoOperacion; }
    public String getEstado() { return estado; }
    public BigDecimal getMonto() { return monto; }
    public String getMoneda() { return moneda; }
    public LocalDate getFecha() { return fecha; }
}