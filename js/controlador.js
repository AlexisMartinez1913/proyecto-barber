let memoria= JSON.parse(localStorage.getItem("datos"))
//console.log(memoria)

let contenedor = document.getElementById('contenedor')
//recorrer memoria y pintar interfaz grafica

memoria.forEach(function(cita) {
    let fila = document.createElement('div')
    fila.classList.add('row', 'my-5', 'shadow', 'text-center', 'p-5')
    let columna1
    let columna2
    columna1 = document.createElement('div')
    columna1.classList.add("col-4")
    columna2 = document.createElement('div')
    columna2.classList.add("col-8", "border-start", "p-4")
    let titulo = document.createElement('h1')
    titulo.textContent = 'Cita Asignada'
    let usuario = document.createElement('h3')
    usuario.textContent = cita.usuario
    let correo = document.createElement('p')
    correo.textContent = cita.correo
    let telefono = document.createElement('p')
    telefono.textContent = cita.telefono
    let hora = document.createElement('p')
    hora.textContent = cita.hora
    //padres e hijos
    columna1.appendChild(titulo)
    columna2.appendChild(usuario)
    columna2.appendChild(correo)
    columna2.appendChild(telefono)
    columna2.appendChild(hora)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
    
});
