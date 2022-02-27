window.addEventListener("load", function () {
    var uEmail = document.querySelector("#e-mail");
    var uPasword = document.querySelector("#contraeña");

    uEmail.addEventListener("click", function (e) {
        e.preventDefault();
        if (uEmail.value ==" ") {
            alert("El email es obligatorio");
        } else if (uEmail.value.length < 8) {
            alert("El email debe tener al menos 8 caracteres");
        }
    })

    uPasword.addEventListener("click", function (e) {
        e.preventDefault();
        if (uPasword.value == "") {
            alert("La constraseña no puede estar vacía");
        }
    })

});
