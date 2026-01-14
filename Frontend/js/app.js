const API = 'http://localhost:3080/tasks';

// Cargar tareas al iniciar
document.addEventListener('DOMContentLoaded', cargarTareas);

function mostrarMensaje(texto, tipo = 'success') {
  const msg = document.getElementById('status-msg');
  msg.textContent = texto;
  msg.className = `status-msg status-${tipo}`;
  msg.style.display = 'block';

  setTimeout(() => {
    msg.style.display = 'none';
  }, 2000);
}



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
  <td>${tarea.estado}</td>
  <td>
    ${
      tarea.estado === 'pendiente'
        ? `<button class="btn btn-completar" onclick="cambiarEstado(${tarea.id}, 'completada')">Completar</button>`
        : `<button class="btn btn-completar" onclick="cambiarEstado(${tarea.id}, 'pendiente')">Reabrir</button>`
    }
    <button class="btn btn-eliminar" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
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

  if (titulo.value.trim() === '' || descripcion.value.trim() === '') {
    mostrarMensaje(' El título y la descripción son obligatorios', 'error');
    return;
  }

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
    mostrarMensaje('Tarea creada correctamente');
    // recargar lista
    cargarTareas();
  }).catch(() => {
    mostrarMensaje(' No se pudo crear la tarea', 'error');
  });

}


// Función para cambiar el estado de una tarea
function cambiarEstado(id, nuevoEstado) {
  fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ estado: nuevoEstado })
  })
  .then(() => {
    mostrarMensaje('Tarea actualizada');
    cargarTareas();
  })
  .catch(() => {
    mostrarMensaje('Error al actualizar', 'error');
  });
}



// Función para eliminar una tarea
function eliminarTarea(id) {
  if (!confirm('¿Seguro que deseas eliminar esta tarea?')) return;

  fetch(`${API}/${id}`, {
    method: 'DELETE'
  })
  .then(() => {
    mostrarMensaje(' Tarea eliminada');
    cargarTareas();
  })
  .catch(() => {
    mostrarMensaje(' Error al eliminar', 'error');
  });
}
