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
        }
    })

  /*  document.querySelector("#form").querySelector('#submit', validar);
                
function validar(evt) {
    let cla1 = document.querySelector("#email").value;
    let cla2 = document.querySelector("#password").value;
    if (cla1 != cla2) {
        alert('Las claves ingresadas son distintaaaaaaas');
        evt.preventDefault();
    }if(cla1 != ' ') {
        alert('No puede estar vaaaaaaaaaaaaacío');
        evt.preventDefault();
    }
}*/


});


