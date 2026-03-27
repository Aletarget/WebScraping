# WebScraping Automation - NestJS

## Descripción

Este proyecto implementa un sistema de web scraping automatizado utilizando NestJS, diseñado para recolectar información de páginas web de forma periódica, procesarla y almacenarla en una base de datos.

El sistema funciona de manera autónoma, ejecutando tareas programadas diariamente mediante un scheduler (cron jobs), permitiendo la recolección continua de datos sin intervención manual.

---

## Características principales

* Extracción de datos desde páginas web (web scraping)
* Procesamiento y estructuración de la información en formato JSON
* Almacenamiento en base de datos MongoDB
* Ejecución automática diaria mediante cron jobs
* Arquitectura modular basada en NestJS

---

## Arquitectura del proyecto

El sistema sigue una arquitectura desacoplada:

```
ScraperService → Obtiene datos de la web
Scheduler (Cron) → Ejecuta scraping automáticamente
Database (MongoDB) → Almacena la información
```

---

## Tecnologías utilizadas

* NestJS – Framework backend basado en Node.js
* Mongoose – ODM para MongoDB
* Axios – Peticiones HTTP
* Cheerio – Parsing de HTML
* @nestjs/schedule – Manejo de tareas programadas

---

## Flujo de funcionamiento

1. El sistema ejecuta un cron job diario
2. Se realiza scraping sobre la página objetivo
3. Los datos se transforman a una estructura JSON
4. Se almacenan en MongoDB como un snapshot diario
---

## Estructura de datos

Ejemplo del formato almacenado:

```json
{
  "date": "2026-03-26",
  "news": [
    {
      "title": "Example News",
      "link": "https://example.com",
      "comments": [
        "Comentario 1",
        "Comentario 2"
      ]
    }
  ]
}
```

---

## Automatización (Cron)

El sistema utiliza tareas programadas para ejecutar el scraping automáticamente:

```ts
@Cron(CronExpression.EVERY_DAY_AT_6AM)
```

Esto permite mantener la base de datos actualizada sin intervención manual.

---

## Instalación y ejecución

```bash
# Clonar repositorio
git clone https://github.com/Aletarget/WebScraping

# Instalar dependencias
npm install

# Ejecutar proyecto
npm run start:dev
```

---

## Configuración

Asegúrate de tener MongoDB corriendo y configurar la conexión en:

```ts
MongooseModule.forRoot('mongodb://localhost:27017/scraping-db')
```

---

## Casos de uso

* Monitoreo de noticias
* Análisis de comentarios
* Recolección de datos para Machine Learning
* Seguimiento de tendencias

---

## Consideraciones

* El scraping depende de la estructura HTML del sitio objetivo
* Cambios en la página pueden afectar el funcionamiento
* Algunos sitios pueden tener protección contra bots

---

## Licencia

Este proyecto es de uso académico y educativo. Puedes adaptarlo según tus necesidades.
