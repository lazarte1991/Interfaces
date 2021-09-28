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
//CIRCULO
// context.arc(x, y, r, ap, af , cR) = Define un segmento circular.
// x y = coordenadas centro
// r = radio
// ap = ángulo de partida en radianes
// af = ángulo final en radianes
// cR = opcional; sentido contra reloj: true | false
// ctx.strokeStyle = "#006400";
// ctx.fillStyle = "#6ab150";
// ctx.lineWidth = 5;
// ctx.arc(50,50, 25, 0, 2*Math.PI);
// ctx.fill();
// //ctx.stroke();

// ctx.strokeStyle = "#006400";
// ctx.fillStyle = "#6ab150";
// ctx.lineWidth = 5;
// ctx.arc(125,50, 25, 0, 2*Math.PI);
// ctx.fill();
// //ctx.stroke();

// ctx.strokeStyle = "#005710";
// ctx.fillStyle = "#6ab150";
// ctx.lineWidth = 5;
// ctx.arc(200,50, 25, 0, 2*Math.PI);
// ctx.fill();
//ctx.stroke();

let tablero = new Tablero(750, 750, canvas.width, canvas.height, ctx);
tablero.draw();


//tablero();
// function tablero() {
//     //let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//     for (let x = 0; x < canvas.width; x+=75) {

//         if (x  != 0) {

//             for (let y = 0; y < canvas.height; y+=75) {

//                 if (y != 0) {
//                    let casillero = new Casillero(x, y, ctx);
//                    casillero.draw();

                                  
//                 }
//             }
       
//         } 
//     }

// }

