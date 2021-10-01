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


function cargaFichaElegida(){
    let ficha =new Ficha(ctx,elegirFicha(img, canvas));
    ficha.cargarImagen();
    ficha.isPointInside();
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
