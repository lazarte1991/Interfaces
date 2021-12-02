

let btnLike=document.getElementById("botonLike").addEventListener("click", actualizar);

var valor = 15;

let like=false;


function actualizar() {
    let contador=document.getElementById("contadorLikes").innerHTML = valor + " likes";
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


document.querySelector("mensajeBuscador");
 
let arrayPublicaciones=[];
function buscar ( ) {
    let str = document.getElementById("busqueda").value;
    let div=document.querySelectorAll("div");
    for(let di of div){
        di.classList.replace("muroCentral", "mensajeBuscador");  
    }
    if(str==""){
        document.getElementById("mensajeBusqueda").innerHTML="Debe ingresar caracteres";
    }
    else{
        let arrayContactos=["María Garcia", "Juan Gonzalez", "Natalia Gimenez", "Ricardo Perez", "Matías Gonzalez"];
        for(let contacto of arrayContactos){
            if(arrayContactos.includes(str)){
                document.getElementById("mensajeBusqueda").innerHTML="esta el contacto";
            }
            else{
                document.getElementById("mensajeBusqueda").innerHTML="esta persona aún no está registrada";
            }
        }
    
    }
}