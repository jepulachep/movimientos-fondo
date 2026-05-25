# Movimientos de Fondos - Prueba Técnica Desarrollador Fullstack Junior 
Sistema de visualización de movimientos de Fondos Mutuos para inversionistas.

## Cómo correr el proyecto

### Backend (Spring Boot)
Requisitos: 
   > Java 17
   > Maven

```bash
cd backend
./mvnw spring-boot:run
```
El servidor arranca en http://localhost:8080
Endpoint disponible: GET http://localhost:8080/api/movimientos

### Frontend (React)
Requisitos: Node.js

```bash
cd frontend
npm install
npm start
```
La aplicación abre en http://localhost:3000
> Es importante que el backend corra antes de iniciar el frontend.

## Supuestos tomados

Campos del movimiento: El enunciado especificaba los campos, así que tuve que hacer una breve busqueda de los requerimientos básicos. Decidí incluir id, numeroOperacion, fondo, tipoOperacion, estado, monto, moneda y fecha porque representan la información mínima que un inversionista necesita para entender cada movimiento hecho de sus inversiones.

Tipos de operación: He verificado que existen dos — SUSCRIPCION (ingreso de dinero al fondo) y RESCATE (retiro de dinero). Son los únicos movimientos posibles en fondos mutuos.

Estados: COMPLETADO, EN_PROCESO y RECHAZADO. Estos representan el ciclo de vida completo de una operación.

Moneda: Se agregó el campo moneda (PEN/USD) porque son los más comunes en fondo mutuos en Perú y el inversionista necesita distinguirlas.

Número de operación: Se agregó para que el inversionista pueda hacer seguimiento o consultar una operación específica con su asesor.

Datos en memoria: Los datos son simulados en memoria. En producción se conectaría a una base de datos relacional como PostgreSQL con JPA/Hibernate.

## Decisiones técnicas

Backend:
- Spring Boot 3.5.14 por estabilidad y abundante documentación disponible para consultas.
- Maven por su adopción en entornos financieros Java empresariales, es la más común.
- Java 17 LTS por ser la versión con mayor soporte y documentación activa.
- Arquitectura en capas (controller, service, model) para separar responsabilidades y mejor organización.

Frontend:
- React con create-react-app por simplicidad y velocidad de setup. 
- Componentes separados por responsabilidad: ResumenInversiones y TablaMovimientos. 
- CSS propio basado en el design system Precision Capital para mantener un estilo financiero profesional.
- Fuente Inter por su legibilidad en contextos de datos financieros y mejor estilo.

Saldo por fondo: Se calculó restando rescates completados a suscripciones completadas, agrupado por fondo. Las operaciones EN_PROCESO no se incluyen porque aún no se han ejecutado.

## Qué no terminé y cómo lo habría resuelto

Base de datos: No conecté una base de datos real. Lo habría resuelto con PostgreSQL usando Spring Data JPA, definiendo Movimiento como entidad con @Entity y usando un MovimientoRepository que extienda JpaRepository.

Autenticación: No hay login. En producción usaría Spring Security con JWT para que cada inversionista vea solo sus propios movimientos.

Filtros: No lo implementé porque en la guía indica explícitamente que no se consideran en esta etapa del MVP. De haberlo necesitado, lo habría resuelto como query params en el endpoint: GET /api/movimientos?estado=COMPLETADO&desde=2026-01-01

Tests: No escribí tests unitarios. Habría testeado la lógica del service con JUnit 5 y Mockito en el backend, y con React Testing Library en el frontend.

Frontend: Lo habría desarrollado con mayor detalle, agregando gráficos de evolución del saldo, íconos en las tarjetas, filtros por fecha, moneda y estado, y una ventana modal con el detalle completo de cada operación al hacer clic en una fila.