function CreateTask(id, titulo, descripcion, estado = 'pendiente') {
  
  return {
    id: id,
    titulo: titulo,
    descripcion: descripcion || '',
    estado: estado, // 'pendiente' o 'completada'
  };
}


module.exports = CreateTask;
