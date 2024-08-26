# Plataforma de Seguimiento de Salud y Bienestar

## Descripción

Este proyecto consiste en una plataforma web diseñada para permitir a los usuarios registrar y monitorear diversas métricas de salud y bienestar, como la actividad física, la dieta, el sueño, y otros indicadores clave. Los administradores tienen acceso a un panel de control donde pueden visualizar tendencias generales, detectar patrones de riesgo, y ofrecer recomendaciones personalizadas a los usuarios.

## Funcionalidades Principales

### Para Usuarios:
- **Registro de Datos de Salud:** Los usuarios pueden ingresar datos diarios sobre su actividad física, dieta, horas de sueño, peso, frecuencia cardíaca, etc.
- **Visualización de Progreso:** Los usuarios pueden ver gráficos y tablas que muestran su progreso en las métricas seleccionadas durante diferentes períodos (diario, semanal, mensual).
- **Recomendaciones Personalizadas:** La plataforma sugiere automáticamente ajustes en la dieta o recomendaciones de ejercicio basadas en los datos ingresados.
- **Notificaciones y Recordatorios:** Recordatorios para ingresar datos diarios y notificaciones en caso de no haber registrado información durante un período de tiempo.

## Estructura del Proyecto

### Backend

- **Tecnologías:** Node.js, Express.js, MongoDB.
- **Estructura de Carpetas:**
/backend ├── /config ├── /controllers ├── /models ├── /routes ├── /middleware └── server.js

- **Endpoints Principales:**
- `/api/users/register`: Registro de usuarios.
- `/api/users/login`: Inicio de sesión de usuarios.
- `/api/health-data`: Manejo de datos de salud (registro y consulta).
- `/api/metrics/real-time`: Métricas de uso en tiempo real.
- `/api/metrics/historical`: Generación de informes históricos.

### Frontend

- **Tecnologías:** React, Axios, React Router, Chart.js.
- **Estructura de Carpetas:**
/frontend ├── /public ├── /src │ ├── /components │ ├── /context │ ├── /services │ └── App.js └── package.json

- **Componentes Principales:**
- `Dashboard`: Muestra gráficos de progreso y recomendaciones.
- `HealthDataEntry`: Formulario para ingresar datos de salud.
- `AdminPanel`: Panel de administración para visualizar métricas.
- `Login`: Componente para el inicio de sesión.

## Instalación y Configuración

### Requisitos Previos
- Node.js (v14 o superior)
- MongoDB (local o MongoDB Atlas)
