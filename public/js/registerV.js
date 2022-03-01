window.addEventListener("load", function () {
    let uEmail = document.querySelector("#email");
    let uName = document.querySelector("#nombre");
    let uLastname = document.querySelector("#apellido");
    let uUserName = document.querySelector("#nombreDeUsuario");
    let uAvatar = document.querySelector("#avatar");
    let uTel = document.querySelector("#tel");
    let uPassword = document.querySelector("#password");


    uName.addEventListener("click", function (e) {
        e.preventDefault();
        if (uName.value =="") {
            alert("Debe escribir su nombre");
        }else if (uName.value.length < 2) {
            alert("El nombre debe tener al menos 2 caracteres");
        }
    })

    uLastname.addEventListener("click", function (e) {
        e.preventDefault();
        if (uLastname.value =="") {
            alert("Debe escribir su apellido");
        }else if (uLastname.value.length < 2) {
            alert("El apellido debe tener al menos 2 caracteres");
        }
    })

    uUserName.addEventListener("click", function (e) {
        e.preventDefault();
        if (uUserName.value =="") {
            alert("Debe escribir un nombre de usuario");
        }
    })


    uAvatar.addEventListener("click", function (e) {
        e.preventDefault();
        if (uAvatar.value =="") {
            alert("Debe elegir una foto de perfil formato (JPG, JPEG, PNG)");
        }
    })

    uTel.addEventListener("click", function (e) {
        e.preventDefault();
        if (uTel.value =="") {
            alert("Debe escribir su número de celular o teléfono");
        }
    })

    uEmail.addEventListener("click", function (e) {
        e.preventDefault();
        if (uEmail.value =="") {
            alert("Debe escribir su correo electrónico");
        }
    })


    uPassword.addEventListener("click", function (e) {
        e.preventDefault();
        if (uPassword.value == "") {
            alert("La constraseña no puede estar vacía");
        }else if (uPassword.value.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
        }
    })


    })