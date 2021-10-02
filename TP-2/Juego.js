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
    if(id == 'siete' && id != null){
        tablero.draw(825,825);
    }else if(id == 'seis' && id != null){
        tablero.draw(750,750);
    }else if(id == 'cinco' && id != null){
        tablero.draw(675,675);
    }else{
        tablero.draw(600,600);
    }  
}

let img=0;
function elegirFicha(){
    console.log("inicio func"+ img);

    let select = document.getElementById("selectFicha"); /*Obtener el SELECT */
    let id = select.options[select .selectedIndex].value; 
    if(id=="value1"){
        img='1';
    }else if(id=="value2"){
        img='2';
    }else if(id=="value3"){
        img='3';
    }else{
        img='4';
    }
    console.log("fin func" +img);
 
    return img;
   
}

//let ficha =new Ficha(ctx,elegirFicha(img));//creo la ficha
//cargo la imagen en la ficha

function cargaFichaElegida(){
    let ficha =new Ficha(ctx,elegirFicha(img, canvas));
    ficha.cargarImagen();
    ficha.isPointInside();
};
// let fichas=[];
// let lastClickedFigure=null;
// let isMouseDown=false;
// let ficha=new Ficha(ctx,elegirFicha(img, canvas));
// fichas.push(ficha);

// console.log("esta el mouse dentro" +ficha.isPointInside());

// let x=0;
// let y=0;
// function findClickedFigure(x,y){
//     for(let i=0; i<figures.length;i++){
//         const element=figures[i];
//         if(element.isPointInside(x,y)){
//             return element;
//         }
//     }
// }

// function onMouseDown(e){
//     isMouseDown=true;
//     if(lastClickedFigure!=null){
//         lastClickedFigure=null;
//     }
//     let clickFig= findClickedFigure(e.layerX,e.layerY)//coordenadas de x e y dentro del canvas
//     if(clickFig!=null){
//         lastClickedFigure=clickFig;
//     }
//     cargaFichaElegida();
    
// }

// ficha.isPointInside(x,y)


// function allowDrop(e){
//     e.preventDefault();
// }

// function drag(e){
//     e.dataTransfer.setData("text",e.target.id);
// }

// function drop(e){
//     e.preventDefault();
//     let data= e.dataTransfer.getData("text");
//     e.target.appendChild(document.getElementById(data));
// }

// let mov=canvas.addEventListener('dragstart',e=>{
//     console.log("drag start");
// });

// let movv=canvas.addEventListener('dragend',e=>{
//     console.log("drag end");
// });

// let movvi=canvas.addEventListener('drag',e=>{
//     console.log("drag");
// });
document.getElementById('elegirFicha').addEventListener("click", cargaFichaElegida);

canvas.addEventListener("dragenter", dragenter, false);
canvas.addEventListener("dragover", dragover, false);
canvas.addEventListener("drop", drop, false);

function dragenter(e) {
    console.log("entra");
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
}


/*let jugador1=new Jugador("jugador1",ficha);//le paso por parámetro la ficha al jugador
jugador1.cargarFichas();//cargo las fichas
let ficha2=new Ficha(ctx,img);
let jugador2=new Jugador("jugador2", ficha2);
*/
/*let fichas=[];
for(let i=0; i<20;i++){
    //ficha.agregarFicha(ficha);
    fichas.push(ficha);
}*/




//fichas.pop(ficha);

//console.log(fichas.length);



    





////////////////////////////////////////////////////////////////////////
////                            EVENTOS                             ////
////////////////////////////////////////////////////////////////////////

document.getElementById('cuatro').addEventListener("click", imprimirTablero);//tablero.draw(600,600));
document.getElementById('cinco').addEventListener("click", imprimirTablero);//tablero.draw(675,675));
document.getElementById('seis').addEventListener("click", imprimirTablero);//tablero.draw(750,750));
document.getElementById('siete').addEventListener("click", imprimirTablero);//tablero.draw(750,750));
