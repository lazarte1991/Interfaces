let regFlujo1 = document.getElementById("reg-flujo-1");
let regFlujo2 = document.getElementById("reg-flujo-2");
let regFlujo3 = document.getElementById("reg-flujo-3");
let regPag1 = document.getElementById("reg-pag-1");
let regPag2 = document.getElementById("reg-pag-2");
let regPag3 = document.getElementById("reg-pag-3");
let siguiente1 = document.getElementById("siguiente-1");
let siguiente2 = document.getElementById("siguiente-2");
let registrarme = document.getElementById("registrarme");

// .reg-flujo-2,
// .reg-flujo-3,
// .reg-pag-2,
// .reg-pag-3,
// .siguiente-2,
// .registrarme

document.getElementById("btn-siguiente-1").addEventListener("click", siguienteUno);
document.getElementById("btn-siguiente-2").addEventListener("click", siguienteDos);

function siguienteUno() {
    regFlujo1.style.display = "none";
    regFlujo2.style.display = "block";
    regPag1.style.display = "none";
    regPag2.style.display = "block";
    siguiente1.style.display = "none";
    siguiente2.style.display = "block";
}

function siguienteDos() {
    // regFlujo1.style.display = "none";
    regFlujo2.style.display = "none";
    // regPag1.style.display = "none";
    regPag2.style.display = "none";
    // siguiente1.style.display = "none";
    siguiente2.style.display = "none";
    regFlujo3.style.display = "block"
    regPag3.style.display = "block"
    registrarme.style.display = "block"
}