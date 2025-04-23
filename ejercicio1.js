const butOnClick= function(){
    const inputNombre = document.getElementById("nombre")
    const inputCorreo = document.getElementById("correo")
    const inputMensaje = document.getElementById("mensaje")
    console.log("entro a la funcion")
    console.log(inputNombre.value)
    if (inputNombre.value == "" || inputCorreo.value == ""|| inputMensaje.value == "") {
        //Error
        console.error("No ha llenado todos los campos")
        const divMensaje = document.getElementById("texto_mensaje")
        divMensaje.setAttribute("class", "alert alert-danger")
        divMensaje.innerText = "No ha llenado todos los campos"
        return
    }
    if (!inputCorreo.value.includes("@") == "" || !inputCorreo.value.includes(".")) {
        //Error
        console.error("No utiliza un formato de email valido")
        const divMensaje = document.getElementById("texto_mensaje")
        divMensaje.setAttribute("class", "alert alert-danger")
        divMensaje.innerText = "No utiliza un formato de email valido"
        return
    }
    console.log("Formulario enviado correctamente")
}

const main = function(){
    const but = document.getElementById("but_enviar")
    but.addEventListener("click", butOnClick)
}

main()