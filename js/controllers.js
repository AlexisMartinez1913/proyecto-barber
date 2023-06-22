let boton = document.getElementById("boton-agenda");
let cajaNombres, cajaCorreo, cajaFecha, cajaHora, cajaTel;
cajaNombres = document.getElementById("usuario");
cajaCorreo = document.getElementById("correo");
cajaFecha = document.getElementById("fecha");

cajaHora = document.getElementById("hora");
cajaTel = document.getElementById("telefono");


//programar evento de hacer clic en el boton
boton.addEventListener("click", function(infoEvento){
    infoEvento.preventDefault();
    let usuario = cajaNombres.value
    let correo = cajaCorreo.value
    let fecha = cajaFecha.value
    let telefono = cajaTel.value
    let hora = cajaHora.value
    let errores = [];
    let citas;
    let datosMemoria = JSON.parse(localStorage.getItem("datos"));
    if(datosMemoria==null){
        citas =[];
    }
    else{
        citas = datosMemoria;
        //citas = citas.push(datosMemoria);
    }

    function validarEmail(correo){
        const regla = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        return regla.test(correo)
    }
    function mostrarError(usuario, mensaje) {
        let campo = document.getElementById(usuario);
        let errorContainer = document.getElementById("error-" + usuario);
        errorContainer.innerText = mensaje;
        campo.classList.add("is-invalid");
    }
    if(!usuario){
        errores.push("El nombre es obligatorio");
        cajaNombres.classList.add("is-invalid");
        mostrarError("usuario", "El nombre es obligatorio");

    } else if(usuario.length<10){
        errores.push("El nombre debe tener al menos 10 caracteres")
        cajaNombres.classList.add("is-invalid")
        mostrarError("usuario", "El nombre debe tener al menos 10 caracteres");
    }

    // cajaNombres.addEventListener("input", function() {
    //     cajaNombres.classList.remove("is-invalid");
    //     cajaNombres.nextElementSibling.textContent = "";
    // });
    


    if(!correo){
        errores.push("El correo es obligatorio")
        cajaCorreo.classList.add("is-invalid")
        mostrarError("correo", "El correo es obligatorio");

    }else if(!validarEmail(correo)){
        errores.push("El correo electrónico no es válido")
        cajaCorreo.classList.add("is-invalid")
        mostrarError("correo", "El correo electrónico no es válido");
    }


    if(!telefono){
        errores.push("El telefono es obligatorio");
        cajaTel.classList.add("is-invalid");
        mostrarError("telefono", "El telefono es obligatorio");

    }
    if(!fecha){
        errores.push("La fecha es obligatoria");
        cajaFecha.classList.add("is-invalid");

    }
    if(hora == 'seleccione una hora'){
        errores.push("La hora es obligatoria");
        cajaHora.classList.add("is-invalid");

    }
    
    if(errores.length==0){
        let datosEnvio = {
            usuario,
            correo,
            telefono,
            fecha,
            hora
        }
        citas.push(datosEnvio)
        //abrimos memoria para almacenar la data local
        localStorage.setItem("datos", JSON.stringify(citas))
    }

    

    if(errores.length>0){
        Swal.fire(
        'Error',
        'Por favor, diligencia correctamente el formulario',
        'error'
    );
    }
    
    // console.log(usuario, correo, fecha, telefono, hora)
    // Swal.fire(
    //     'Excelent',
    //     'Cita Agendada',
    //     'success'
    //   )
})