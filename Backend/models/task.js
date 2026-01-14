function CreateTask(id, titulo, descripcion, estado = 'pendiente') {
  const fechaCreacion = new Date().toISOString();
  
  return {
    id: id,
    titulo: titulo,
    descripcion: descripcion || '',
    estado: estado, // 'pendiente' o 'completada'
  };
}

module.exports = CreateTask;