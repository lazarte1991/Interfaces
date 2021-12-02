

let btnLike=document.getElementById("botonLike").addEventListener("click", actualizar);

// let btnComentar=document.getElementById("botonComentar").addEventListener("click", comentar);

// let btnCompartir=document.getElementById("botonCompartir").addEventListener("click", compartir);


var valor = 15;
// let valor2=2954;
// let valor3=148;
let like=false;


function actualizar() {
    let contador=document.getElementById("contadorLikes").innerHTML = valor + " likes";
    // let contador1=document.getElementById("contadorLikes1").innerHTML = valor2 + " likes";
    // let contador2=document.getElementById("contadorLikes2").innerHTML = valor3 + " likes";
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

