window.addEventListener("load", function () {
    let uEmail = document.querySelector("#email");
    let uPassword = document.querySelector("#password");
    

    uEmail.addEventListener("click", function (e) {
        e.preventDefault();
        if (uEmail.value =="") {
            alert("El email es obligatorio");
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


});
