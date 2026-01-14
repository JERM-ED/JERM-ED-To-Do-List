# To Do List


> **Aplicación web de lista de tareas (CRUD)** desarrollada con **Node.js** y **Express**, con un frontend sencillo en **HTML, CSS y JavaScript**.

Esta aplicación permite crear, visualizar, actualizar y eliminar tareas de forma simple e intuitiva, ideal como proyecto introductorio para comprender el flujo completo **Backend + Frontend**.

---


##  Tabla de contenidos

* [Descripción general](#-descripción-general)
* [Características](#-características)
* [Tecnologías usadas](#-tecnologías-usadas)
* [Estructura del proyecto](#-estructura-del-proyecto)
* [Instalación](#-instalación)
* [Ejecución](#-ejecución)
* [Uso del Frontend](#-uso-del-frontend)
* [Notas](#-notas)


---

##  Descripción general

**To Do List** es una aplicación web básica que implementa las operaciones **CRUD**:

* **Create**: Crear nuevas tareas
* **Read**: Listar tareas existentes
* **Update**: Actualizar tareas
* **Delete**: Eliminar tareas

El objetivo principal del proyecto es reforzar conceptos fundamentales de **Node.js**, **Express** y el consumo de una **API REST** desde el frontend.

---

##  Características

* API REST desarrollada con Express
* Operaciones CRUD completas
* Comunicación frontend-backend mediante HTTP
* Estructura clara y fácil de entender
* Ideal para prácticas y proyectos académicos

---

##  Tecnologías usadas

* **Node.js**
* **Express**
* **JavaScript**
* **CORS**
* **HTML**
* **CSS**

---

##  Estructura del proyecto

```
JERM-ED-To-Do-List/
│
├── backend/
│ ├── app.js # Archivo principal del servidor
│ ├── routes/
│ │ └── routes.task.js # Rutas de las tareas (CRUD)
│ ├── models/
│ │ └── task.js # Modelo de la tarea
│ └── package.json # Dependencias y scripts del backend
│
├── frontend/
│ ├── index.html # Interfaz principal
│ ├── css/
│ │ └── styles.css # Estilos de la aplicación
│ └── js/
│ └── app.js # Lógica del frontend
│
└── README.md # Documentación del proyecto
```

---

##  Instalación

1. **Clonar el repositorio**

```
https://github.com/JERM-ED/JERM-ED-To-Do-List.git'

```

# Entrar al proyecto:
```
cd todo-list-node
``` 
 Instalar dependencias:
 ```
 npm install 
 
 ```

Inicia el servidor con:
 ```
node app.js
```

2. El servidor se ejecutará en:

 ```
 ```
 El servidor correrá en:
http://localhost:3080

```