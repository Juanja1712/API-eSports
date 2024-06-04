Gestión de Torneos de Esports API

Descripción del Proyecto

Este proyecto está desarrollado para una empresa dedicada a la gestión de torneos de videojuegos (esports) en Colombia. La API permite la gestión eficiente de torneos, jugadores y resultados. Las funcionalidades incluyen la creación, actualización, eliminación y consulta de torneos, jugadores y resultados, así como la asignación aleatoria de competencias y el registro de resultados.


Funcionalidades

Registrar, consultar y actualizar un jugador.
Crear, actualizar, eliminar y consultar torneos.
Agregar participantes a torneos.
Consultar torneos con sus participantes.
Asignar aleatoriamente la competencia de un torneo entre jugadores inscritos.
Registrar resultados de competencias con datos de ganador, perdedor y puntaje.
Consultar resultados de jugadores por torneo con filtros, ordenamiento y paginación.

Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```bash


src/
├── players/
│   ├── controller/
│   │   └── players.controller.ts
│   ├── dto/
│   │   └── player.dto.ts
│   ├── entities/
│   │   └── player.entity.ts
│   ├── module/
│   │   └── players.module.ts
│   └── service/
│       └── players.service.ts
├── results/
│   ├── controller/
│   │   └── results.controller.ts
│   ├── dto/
│   │   └── result.dto.ts
│   ├── entities/
│   │   └── result.entity.ts
│   ├── module/
│   │   └── results.module.ts
│   └── service/
│       └── results.service.ts
├── tournament/
│   ├── controller/
│   │   └── tournaments.controller.ts
│   ├── dto/
│   │   └── tournament.dto.ts
│   ├── entities/
│   │   └── tournament.entity.ts
│   ├── module/
│   │   └── tournaments.module.ts
│   └── service/
│       └── tournaments.service.ts
├── app.module.ts
└── main.ts

```
Configuración del Proyecto
Requisitos:

Node.js (versión LTS recomendada)
PostgreSQL o MySQL
NestJS CLI

Instalación

instalar dependencias:
npm install

Uso de la API

Documentación

La API está documentada con Swagger. Una vez que la aplicación esté en funcionamiento, puedes acceder a la documentación en http://localhost:3000/api/v1.
