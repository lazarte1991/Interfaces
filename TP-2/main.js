"use strict"
////////////////////////////////////////////////////////////////////////
////                           VARIABLES                            ////
////////////////////////////////////////////////////////////////////////

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
let widthCanvas = 1100;
let heightCanvas = 900;
canvas.width = widthCanvas;
canvas.height = heightCanvas;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let tableroWidth = 600;
let tableroHeight = 600;
let tablero = new Tablero(canvas.width, canvas.height, ctx);

//medidas tableros: el mas grande 750 6 en linea
//mediano 675
//chico 600
//imprimirTablero(tableroWidth,tableroHeight);
imprimirTableroInicial();
function imprimirTableroInicial(){
     tablero.draw(tableroWidth,tableroHeight);
}
function imprimirTablero(){
    let id = this.id;
    if(id == 'seis' && id != null){
        tablero.draw(750,750);
    }else if(id == 'cinco' && id != null){
        tablero.draw(675,675);
    }else{
        tablero.draw(600,600);
    }  
}
    





////////////////////////////////////////////////////////////////////////
////                            EVENTOS                             ////
////////////////////////////////////////////////////////////////////////

document.getElementById('cuatro').addEventListener("click", imprimirTablero);//tablero.draw(600,600));
document.getElementById('cinco').addEventListener("click", imprimirTablero);//tablero.draw(675,675));
document.getElementById('seis').addEventListener("click", imprimirTablero);//tablero.draw(750,750));