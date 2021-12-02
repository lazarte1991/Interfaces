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
    
