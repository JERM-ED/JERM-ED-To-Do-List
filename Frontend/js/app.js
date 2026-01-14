const API = 'http://localhost:3080/tasks';

// Cargar tareas al iniciar
document.addEventListener('DOMContentLoaded', cargarTareas);

function cargarTareas() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      lista.innerHTML = '';

      if (data.tasks && data.tasks.length > 0) {
        data.tasks.forEach(tarea => {
          const tr = document.createElement('tr');

          tr.innerHTML = `
            <td>${tarea.id}</td>
            <td>${tarea.titulo}</td>
            <td>${tarea.descripcion || ''}</td>
            <td>
              <input 
                type="checkbox"
                ${tarea.estado === 'completada' ? 'checked' : ''}
                onchange="cambiarEstado(${tarea.id}, this.checked)"
              >
            </td>
            <td>
              <button onclick="eliminarTarea(${tarea.id})">
                Eliminar
              </button>
            </td>
          `;

          lista.appendChild(tr);
        });
      }
    });
}

// Función para crear una nueva tarea
function crearTarea() {
  const titulo = document.getElementById('titulo');
  const descripcion = document.getElementById('descripcion');

  const nuevaTarea = {
    titulo: titulo.value,
    descripcion: descripcion.value,
    estado: 'pendiente'
  };

  fetch(API, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevaTarea)
  })
  .then(res => res.json())
  .then(() => {
    // limpiar inputs
    titulo.value = '';
    descripcion.value = '';
    
    titulo.focus();

    // recargar lista
    cargarTareas();
  });
}


// Función para cambiar el estado de una tarea
function cambiarEstado(id, completada) {
  const nuevoEstado = completada ? 'completada' : 'pendiente';

  fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ estado: nuevoEstado })
  })
  .then(() => {
    cargarTareas();
  });
}


// Función para eliminar una tarea
function eliminarTarea(id) {

  fetch(`${API}/${id}`, {
    method: 'DELETE'
  })
  .then(() => {
    cargarTareas();
  })
}

// Permitir agregar tarea con Enter
document.getElementById('titulo').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    crearTarea();
  }
});