let iLoading = document.getElementById("icono-loading-container");
let usuarioLogin = document.getElementById("usuario-login");
let passLogin = document.getElementById("pass-login");
let form = document.getElementById("form");
// let logo = document.getElementById("logo");
let layer1 = document.getElementById("layer-1");
let layer2 = document.getElementById("layer-2");
let layer3 = document.getElementById("layer-3");
let usuarios = [];
usuarios.push(["maria lopez", "123"]);
usuarios.push(["user1", "123"]);
usuarios.push(["user2", "123"]);

document.getElementById("ingresar-login").addEventListener("click", login); //chequeoLogin
document.getElementById("registrar-login").addEventListener("click", registro);

function chequeoLogin() {

    let vacio = 0;
    let user = 0;
    let pass = 0;
    let encontroUser = false;
    let retorno = false;


    if (usuarioLogin.value === "") {
        usuarioLogin.style.border = "solid 1px red";
        vacio = 1;
    } else {
        usuarioLogin.style.border = "none";
        usuarios.forEach(elem => {

            if (elem[0] === usuarioLogin.value) {

                encontroUser = true;
                user = 0;
                usuarioLogin.style.border = "none";
                document.getElementById("error-login").innerHTML = "";
                if (passLogin.value === "") {
                    passLogin.style.border = "solid 1px red";
                    vacio = 1;
                } else {

                    if (elem[1] === passLogin.value) {
                        document.getElementById("error-login").innerHTML = "";
                        retorno = true;

                    } else {
                        passLogin.style.border = "solid 1px red";
                        pass = 1;
                    }
                }
            } else {
                if (!encontroUser) {
                    usuarioLogin.style.border = "solid 1px red";
                    user = 1;
                }
            }

        });

    }

    if (vacio == 1) {
        document.getElementById("error-login").innerHTML = "*Campos incompletos";
    }
    if (user == 1) {
        document.getElementById("error-login").innerHTML = "*El usuario no se encuentra registrado";
    }
    if (pass == 1) {
        document.getElementById("error-login").innerHTML = "*Contraseña incorrecta";
    }

    return retorno;

}

function login() {

    usuarioLogin.style.border = "none";
    passLogin.style.border = "none";

    document.getElementById("error-login").innerHTML = "";
    if (chequeoLogin() == true) {
        layer1.style.display = "none"
        layer2.style.display = "none"
        layer3.style.display = "none"
        form.style.display = "none";
        iLoading.style.display = "block";
        iLoading.style.display = "flex";

        setTimeout(() => {
            iLoading.style.display = "none";
            location.href = "muroNoticias.html";
        }, 4000);
    }

}

function registro() {
    layer1.style.display = "none"
    layer2.style.display = "none"
    layer3.style.display = "none"
    form.style.display = "none";
    iLoading.style.display = "block";
    iLoading.style.display = "flex";

    setTimeout(() => {
        iLoading.style.display = "none";
        location.href = "flujoRegistro.html";
    }, 4000);


}