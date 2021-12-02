

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

//  let contenedor=document.getElementByClass("mensajeBuscador");
// function buscar ( ) {

    
//     let str = document.getElementById("busqueda").value;
   
//     if(str=="g"){
//        contenedor.innerHTML+="Debe ingresar caracteres";

//     }
    
//   }
  

  let btnComentarios=document.getElementById("botonComentar").addEventListener("click", actualizarComentarios);
  
let valorComentarios=29;

function actualizarComentarios(){

    let div=document.querySelectorAll("div");
    for(let di of div){
        di.classList.replace("inputComentarios", "mostrar");  
    }
    if(event.keyCode == 13){
        borrarComentarios();
    }
}

function borrarComentarios(){
   
   
        valorComentarios++;
        document.getElementById("contadorComentarios").innerHTML=valorComentarios + " comentarios"; 
        let div=document.querySelectorAll("div");
    for(let di of div){
        di.classList.replace("mostrar", "inputComentarios");  
    }
    
}