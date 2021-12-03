let regFlujo1 = document.getElementById("reg-flujo-1");
let regFlujo2 = document.getElementById("reg-flujo-2");
let regFlujo3 = document.getElementById("reg-flujo-3");
let regPag1 = document.getElementById("reg-pag-1");
let regPag2 = document.getElementById("reg-pag-2");
let regPag3 = document.getElementById("reg-pag-3");
let siguiente1 = document.getElementById("siguiente-1");
let siguiente2 = document.getElementById("siguiente-2");
let registrarme = document.getElementById("registrarme");
let usuario = document.getElementById("usuario");
let pass = document.getElementById("pass");
let passDos = document.getElementById("passDos");
let nombreUsuario = document.getElementById("nombreUsuario");
let ciudad = document.getElementById("ciudad");
let codigoPostal = document.getElementById("codigoPostal");
let fotoUsuario = document.getElementById("fotoUsuario");
let nombreMascota = document.getElementById("nombreMascota");
let especie = document.getElementById("especie");
let fotoMascota = document.getElementById("fotoMascota");
let iLoading = document.getElementById("icono-loading-container");
let usuarioLogin = document.getElementById("usuario-login");
let passLogin = document.getElementById("pass-login");
let form = document.getElementById("form");
let logo = document.getElementById("logo");
let usuarios = [];

// .reg-flujo-2,
// .reg-flujo-3,
// .reg-pag-2,
// .reg-pag-3,
// .siguiente-2,
// .registrarme

document.getElementById("btn-siguiente-1").addEventListener("click", paginaUno);
document.getElementById("btn-siguiente-2").addEventListener("click", paginaDos);
document.getElementById("btn-registrarme").addEventListener("click", paginaTres);
document.getElementById("pagina-1-reg").addEventListener("click", mostrarPaginaUno);
document.getElementById("pagina-1a-reg").addEventListener("click", mostrarPaginaUno);
document.getElementById("pagina-2-reg").addEventListener("click", chequeoItemDos);
document.getElementById("pagina-2a-reg").addEventListener("click", chequeoItemDos);
document.getElementById("pagina-3-reg").addEventListener("click", chequeoItemTres);
document.getElementById("pagina-3a-reg").addEventListener("click", chequeoItemTres);
// document.getElementById("ingresar-login").addEventListener("click", consola); //chequeoLogin

function consola() {
    console.log("KKKKKKKKKKKKKKKKKKKKK");
}


function mostrar(id) {
    regFlujo1.style.display = "none";
    regFlujo2.style.display = "none";
    regFlujo3.style.display = "none";
    regPag1.style.display = "none";
    regPag2.style.display = "none";
    regPag3.style.display = "none";
    siguiente1.style.display = "none";
    siguiente2.style.display = "none";
    registrarme.style.display = "none";
    iLoading.style.display = "block";
    iLoading.style.display = "flex";

    setTimeout(() => {
        if (id == "pagina-1-reg" || id == "pagina-1a-reg") {
            iLoading.style.display = "none";
            mostrarPaginaUno();
        }
        if (id == "pagina-2-reg" || id == "pagina-2a-reg" || id == "btn-siguiente-1") {
            mostrarPaginaDos();
        }
        if (id == "pagina-3-reg" || id == "pagina-3a-reg" || id == "btn-siguiente-2") {
            mostrarPaginaTres();
        }
        if (id == "btn-registrarme") {
            location.href = "index.html";
        }
    }, 4000);

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

function paginaDos(event) {
    let id = event.srcElement.id
    if (chequeoDos()) {
        mostrar(id);
    }
}

function paginaTres(event) {
    let id = event.srcElement.id
    if (chequeoTres()) {
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
    return retorno;
}

function chequeoDos() {
    let check = 0;
    let retorno = false;
    if (nombreUsuario.value == "") {
        nombreUsuario.style.border = "solid 1px red";
        check = 1;
    } else {
        nombreUsuario.style.border = "none";
    }
    if (ciudad.value == "") {
        ciudad.style.border = "solid 1px red";
        check = 1;
    } else {
        ciudad.style.border = "none";
    }
    if (codigoPostal.value == "") {
        codigoPostal.style.border = "solid 1px red";
        check = 1;
    } else {
        codigoPostal.style.border = "none";
    }
    if (fotoUsuario.value == "") {
        fotoUsuario.style.border = "solid 1px red";
        check = 1;
    } else {
        fotoUsuario.style.border = "none";
    }

    if (check == 1) {
        document.getElementById("error-2").innerHTML = "*Campos incompletos";
    } else {
        document.getElementById("error-2").innerHTML = "";
        retorno = true;
    }
    return retorno;
}

function chequeoItemDos() {
    if (nombreUsuario.value != "" || ciudad.value != "" || codigoPostal.value != "" || fotoUsuario.value != "") {
        mostrarPaginaDos();
    }
}

function chequeoTres() {
    let check = 0;
    let retorno = false;
    if (nombreMascota.value == "") {
        nombreMascota.style.border = "solid 1px red";
        check = 1;
    } else {
        nombreMascota.style.border = "none";
    }
    if (especie.value == "") {
        especie.style.border = "solid 1px red";
        check = 1;
    } else {
        especie.style.border = "none";
    }
    if (fotoMascota.value == "") {
        fotoMascota.style.border = "solid 1px red";
        check = 1;
    } else {
        fotoMascota.style.border = "none";
    }

    if (check == 1) {
        document.getElementById("error-3").innerHTML = "*Campos incompletos";
    } else {
        document.getElementById("error-3").innerHTML = "";
        retorno = true;
    }
    return retorno;
}

function chequeoItemTres() {
    if (nombreMascota.value != "" || especie.value != "" || fotoMascota.value != "") {
        mostrarPaginaTres();
    }
}

function mostrarPaginaUno() {
    regFlujo1.style.display = "block";
    regFlujo2.style.display = "none";
    regFlujo3.style.display = "none";
    regPag1.style.display = "block";
    regPag1.style.display = "flex";
    regPag2.style.display = "none";
    regPag3.style.display = "none";
    siguiente1.style.display = "block";
    siguiente1.style.display = "flex";
    siguiente2.style.display = "none";
    registrarme.style.display = "none";
    iLoading.style.display = "none";
}

function mostrarPaginaDos() {
    regFlujo1.style.display = "none";
    regFlujo2.style.display = "block";
    regFlujo3.style.display = "none";
    regPag1.style.display = "none";
    regPag2.style.display = "block";
    regPag2.style.display = "flex";
    regPag3.style.display = "none";
    siguiente1.style.display = "none";
    siguiente2.style.display = "block";
    siguiente2.style.display = "flex";
    registrarme.style.display = "none";
    iLoading.style.display = "none";
}

function mostrarPaginaTres() {
    regFlujo1.style.display = "none";
    regFlujo2.style.display = "none";
    regPag1.style.display = "none";
    regPag2.style.display = "none";
    siguiente1.style.display = "none";
    siguiente2.style.display = "none";
    regFlujo3.style.display = "block";
    regPag3.style.display = "block";
    regPag3.style.display = "flex";
    registrarme.style.display = "block";
    registrarme.style.display = "flex";
    iLoading.style.display = "none";
}

// function chequeoLogin(event) {
//     let id = event.srcElement.id
//     console.log("ENTRA AL CHEQUEO LOGIN");
//     let check = 0;
//     let retorno = false;
//     if (usuarioLogin.value == "") {
//         usuarioLogin.style.border = "solid 1px red";
//         check = 1;
//         if (passLogin.value == "") {
//             passLogin.style.border = "solid 1px red";
//             check = 1;
//         }
//     } else if (passLogin.value == "") {
//         passLogin.style.border = "solid 1px red";
//         check = 1;
//     } else {
//         usuarios.forEach(elem => {
//             if (elem[0] == usuarioLogin.value) {

//                 if (elem[1] == passLogin) {
//                     login(id);
//                 } else {
//                     passLogin.style.border = "solid 1px red";
//                     check = 3
//                 }
//             } else {
//                 usuarioLogin.style.border = "solid 1px red";
//                 check = 2
//             }
//         });
//     }




//     if (especie.value == "") {
//         especie.style.border = "solid 1px red";
//         check = 1;
//     } else {
//         especie.style.border = "none";
//     }
//     if (fotoMascota.value == "") {
//         fotoMascota.style.border = "solid 1px red";
//         check = 1;
//     } else {
//         fotoMascota.style.border = "none";
//     }

//     if (check == 1) {
//         document.getElementById("error-login").innerHTML = "*Campos incompletos";
//     } else if (check == 2) {
//         document.getElementById("error-login").innerHTML = "*El usuario no se encuentra registrado";
//     } else if (check == 3) {
//         document.getElementById("error-login").innerHTML = "*Contraseña incorrecta";
//         retorno = true;
//     } else {
//         document.getElementById("error-login").innerHTML = "";
//         retorno = true;
//     }
//     return retorno;

// }