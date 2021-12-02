

let btnLike=document.getElementById("botonLike").addEventListener("click", actualizar);

// let btnComentar=document.getElementById("botonComentar").addEventListener("click", comentar);

// let btnCompartir=document.getElementById("botonCompartir").addEventListener("click", compartir);


var valor = 14;
let like=false;


function contar(){
   
}

function actualizar() {
    document.getElementById("contadorLikes").innerHTML = valor + " likes";
    if(!like){
        document.getElementById("like").src="https://img.icons8.com/ios-filled/20/fa314a/like--v1.png"; 
        like=true;
        valor--;
    }else{
        document.getElementById("like").src="https://img.icons8.com/ios-filled/20/000000/filled-like.png";
        like=false;
        valor++;

    }


    
}

