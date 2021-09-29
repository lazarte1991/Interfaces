"use strict"
////////////////////////////////////////////////////////////////////////
////                           VARIABLES                            ////
////////////////////////////////////////////////////////////////////////

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
let widthCanvas = 1250;
let heightCanvas = 900;
canvas.width = widthCanvas;
canvas.height = heightCanvas;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);
//"#3393B5"


let tablero = new Tablero(canvas.width, canvas.height, ctx);

//medidas tableros: el mas grande 750 6 en linea
//mediano 675
//chico 600

tablero.draw(600,600);




