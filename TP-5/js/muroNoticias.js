let btnLike1=document.getElementById("botonLike1").addEventListener("click", actualizarContador1);
let btnLike2=document.getElementById("botonLike2").addEventListener("click", actualizarContador2);

let valor2=2955;
let valor3=149;
let like1=false;
let like2=false;


function actualizarContador1() {
    let contador1=document.getElementById("contadorLikes1").innerHTML = valor2 + " likes";
   
    if(contador1){
         if(!like1){
            document.getElementById("like1").src="https://img.icons8.com/ios-filled/20/fa314a/like--v1.png"; 
            like1=true;
            valor2--;
        }else{
            document.getElementById("like1").src="https://img.icons8.com/ios-filled/20/000000/filled-like.png";
            like1=false;
            valor2++;
        }
    }
}

function actualizarContador2() {
 let contador2=document.getElementById("contadorLikes2").innerHTML = valor3 + " likes";
     if(contador2){
        if(!like2){
            document.getElementById("like2").src="https://img.icons8.com/ios-filled/20/fa314a/like--v1.png"; 
            like2=true;
            valor3--;
            }else{
                document.getElementById("like2").src="https://img.icons8.com/ios-filled/20/000000/filled-like.png";
                like2=false;
                valor3++;
            }
    }
   
}
    

let btnComentarios=document.getElementById("botonComentar1").addEventListener("click", actualizarComentarios1);
  
let valorComentarios1=739;

function actualizarComentarios1(){

    let div=document.querySelectorAll("div");
    for(let di of div){
        di.classList.replace("inputComentarios", "mostrar");  
    }
    if(event.keyCode == 13){
        borrarComentarios1();
    }
}

function borrarComentarios1(){
    valorComentarios1++;
    document.getElementById("contadorComentarios1").innerHTML=valorComentarios1 + " comentarios"; 
    let div=document.querySelectorAll("div");
    for(let di of div){
        di.classList.replace("mostrar", "inputComentarios");  
    }
}


let btnComentarios2=document.getElementById("botonComentar2").addEventListener("click", actualizarComentarios2);
  
let valorComentarios2=245;

function actualizarComentarios2(){

    let div=document.querySelectorAll("div");
    for(let di of div){
        di.classList.replace("inputComentarios2", "mostrar");  
    }
    if(event.keyCode == 13){
        borrarComentarios2();
    }
}

function borrarComentarios2(){
    valorComentarios2++;
    document.getElementById("contadorComentarios2").innerHTML=valorComentarios2 + " comentarios"; 
    let div=document.querySelectorAll("div");
    for(let di of div){
        di.classList.replace("mostrar", "inputComentarios2");  
    }
}

let btnCompartir1=document.getElementById("botonCompartir1").addEventListener("click", contar1);
let btnCompartir2=document.getElementById("botonCompartir2").addEventListener("click", contar2);

let valorCompartidos1=503;
let valorCompartidos2=162;
function contar1(){
    valorCompartidos1++;
    document.getElementById("contadorCompartidos1").innerHTML=valorCompartidos1 + " compartidos"; 
}

function contar2(){
    valorCompartidos2++;
    document.getElementById("contadorCompartidos2").innerHTML=valorCompartidos2 + " compartidos"; 
}