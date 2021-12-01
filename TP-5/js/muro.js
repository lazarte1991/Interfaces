

let btnLike=document.getElementById("botonLike").addEventListener("click", contar);

let btnComentar=document.getElementById("botonComentar").addEventListener("click", comentar);

let btnCompartir=document.getElementById("botonCompartir").addEventListener("click", compartir);


var valor = 0;

function contar(){
    updateDisplay(valor++);
}

function updateDisplay(val) {
    document.getElementById("contadorLikes").innerHTML = val;
}