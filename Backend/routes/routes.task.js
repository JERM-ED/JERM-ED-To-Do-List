const express = require('express');
const router = express.Router();
const CreateTask = require('../models/task');

let tareas = [];
let nextId = 1;

// GET /tasks - Obtener todas las tareas
router.get('/', (req, res) => {
  res.json({
    count: tareas.length,
    tasks: tareas
  });
});

// POST /tasks - Crear una nueva tarea
router.post('/', (req, res) => {
  const { titulo, descripcion } = req.body;

  if (!titulo || titulo.trim() === '' || !descripcion || descripcion.trim() === '') {
    return res.status(400).json({ 
      error: 'El título y la descripción son obligatorios y no pueden estar vacíos' 
    });
  }
  const tarea = CreateTask(
    nextId++, 
    titulo.trim(), 
    descripcion ? descripcion.trim() : '',
    'pendiente' // Estado por defecto
  );
  
  tareas.push(tarea);
  res.status(201).json({
    message: 'Tarea creada exitosamente',
  });
});

// PUT /tasks/:id - Actualizar una tarea existente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ 
      error: `Tarea con ID ${id} no encontrada` 
    });
  }
  const { estado } = req.body;

  if (estado !== undefined) tarea.estado = estado;

  res.json({
    message: 'Tarea actualizada exitosamente',
  });
});

// DELETE /tasks/:id - Eliminar una tarea
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex(t => t.id === id);

  if (tareaIndex === -1) {
    return res.status(404).json({ 
      error: `Tarea con ID ${id} no encontrada` 
    });
  }
  
  tareas = tareas.filter(t => t.id !== id);
  
  res.json({
    message: 'Tarea eliminada exitosamente',
  });
});

module.exports = router;