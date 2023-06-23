let memoria = JSON.parse(localStorage.getItem("datos"));
let contenedor = document.getElementById('contenedor');

// Función para eliminar una cita
function eliminarCita(index) {
  // Eliminar la cita del arreglo  
  memoria.splice(index, 1);

  // Actualizar la interfaz gráfica
  contenedor.innerHTML = '';
  memoria.forEach(function(cita, i) {
    // Código para crear las cards de Bootstrap 
    crearCardCita(cita, i);
  });

  // Almacenar los cambios en localStorage
  localStorage.setItem("datos", JSON.stringify(memoria));
}

// Función para crear una card de cita
function crearCardCita(cita, index) {
  let fila = document.createElement('div');
  fila.classList.add('row', 'my-5', 'shadow', 'text-center', 'p-5');
  let columna1 = document.createElement('div');
  columna1.classList.add("col-4");
  let columna2 = document.createElement('div');
  columna2.classList.add("col-8", "border-start", "p-4");
  let titulo = document.createElement('h1');
  titulo.textContent = 'Cita Asignada';
  let usuario = document.createElement('h3');
  usuario.textContent = cita.usuario;
  let correo = document.createElement('p');
  correo.textContent = cita.correo;
  let telefono = document.createElement('p');
  telefono.textContent = cita.telefono;
  let hora = document.createElement('p');
  hora.textContent = cita.hora;
  
  // Botón de eliminar
  let botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.classList.add('btn', 'btn-danger', 'mx-2');
  botonEliminar.addEventListener('click', function() {
    eliminarCita(index);
    Swal.fire(
        'Excelente',
        'SE HA ELIMINADO LA CITA',
        'success'
      )
  });
  
  columna1.appendChild(titulo);
  columna2.appendChild(usuario);
  columna2.appendChild(correo);
  columna2.appendChild(telefono);
  columna2.appendChild(hora);
  columna2.appendChild(botonEliminar);
  fila.appendChild(columna1);
  fila.appendChild(columna2);
  contenedor.appendChild(fila);
}

// Recorrer las citas y pintar la interfaz gráfica
memoria.forEach(function(cita, index) {
  crearCardCita(cita, index);
});