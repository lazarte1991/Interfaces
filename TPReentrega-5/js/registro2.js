let regFlujo1 = document.getElementById("reg-flujo-1");
let regPag1 = document.getElementById("reg-pag-1");
let registrarme = document.getElementById("registrarme");
let usuario = document.getElementById("usuario");
let pass = document.getElementById("pass");
let passDos = document.getElementById("passDos");
let fotoUsuario = document.getElementById("fotoUsuario");
let iLoading = document.getElementById("icono-loading-container");
let usuarioLogin = document.getElementById("usuario-login");
let passLogin = document.getElementById("pass-login");
let form = document.getElementById("form");
let logo = document.getElementById("logo");
let usuarios = [];




document.getElementById("btn-registrarme").addEventListener("click", paginaUno);



function mostrar(id) {
    regFlujo1.style.display = "none";
    regPag1.style.display = "none";
    registrarme.style.display = "flex";
    iLoading.style.display = "block";
    iLoading.style.display = "flex";
    setTimeout(() => {
        if (id == "btn-registrarme") {
            location.href = "confirmacion.html";
        }
    }, 2000);

}



function paginaUno(event) {
    let id = event.srcElement.id
    let user = [];
    if (chequeoUno()) {
        user.push(usuario.value);
        user.push(passDos.value);
        usuarios.push(user);
        mostrar(id);
    }
}



function chequeoUno() {
    let check = 0;
    let retorno = false;
    if (usuario.value == "") {
        usuario.style.border = "solid 1px red";
        check = 1;
    } else {
        usuario.style.border = "none";
    }
    if (pass.value == "") {
        pass.style.border = "solid 1px red";
        check = 1;
    } else {
        pass.style.border = "none";
    }
    if (passDos.value == "") {
        passDos.style.border = "solid 1px red";
        check = 1;
    } else {
        passDos.style.border = "none";
    }

    if (check == 1) {
        document.getElementById("error-1").innerHTML = "*Campos incompletos";
    } else if (pass.value != passDos.value) {
        passDos.style.border = "solid 1px red";
        document.getElementById("error-1").innerHTML = "*Las contraseñas no coinciden";
    } else {
        document.getElementById("error-1").innerHTML = "";
        passDos.style.border = "none";
        retorno = true;
    }
    if (fotoUsuario.value == "") {
        fotoUsuario.style.border = "solid 1px red";
        check = 1;
    } else {
        fotoUsuario.style.border = "none";
    }

    return retorno;
}



function mostrarPaginaUno() {
    regFlujo1.style.display = "block";
    regPag1.style.display = "block";
    registrarme.style.display = "flex";
    iLoading.style.display = "none";
}

