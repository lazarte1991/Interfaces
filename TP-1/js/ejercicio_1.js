"use strict"
////////////////////////////////////////////////////////////////////////
////                           VARIABLES                            ////
////////////////////////////////////////////////////////////////////////


let miCanvas = document.querySelector('#pizarra');

let ctx = miCanvas.getContext("2d");
miCanvas.width = 700;
miCanvas.height = 600;

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, miCanvas.width, miCanvas.height);

let copia = [];

let correccionX = 0;
let correccionY = 0;
let pintarLinea = false;

// Marca el nuevo punto
let nuevaPosicionX = 0;
let nuevaPosicionY = 0;


////////////////////////////////////////////////////////////////////////
////                           FUNCIONES                            ////
////////////////////////////////////////////////////////////////////////


function getColor(){
    return document.getElementById('seleccionarColor').value;
}

function getGrosor(){
    return document.getElementById('grosor').value;
}


var pos = { x: 0, y: 0};
var rect=miCanvas.getBoundingClientRect();

function dibujarLapiz(){
    lapiz=true;
    goma=false;
}


function dibujargoma(){
    lapiz=false;
    goma=true;
}

// LIMPIAR EL LIENZO
function limpiarLienzo(){
    miCanvas.width = 700;
    miCanvas.height = 500; 
  ctx.clearRect(0,0,miCanvas.width,miCanvas.height);
    ctx.fillStyle = "rgba(255,255,255,255)";//Se vuelve a pintar de blanco el lienzo
    ctx.fillRect(0, 0, miCanvas.width, miCanvas.height);//rellena el lienzo de blanco
   /* miCanvas.width = 700;
    miCanvas.height = 500; //Se vuelve al tamaño original del lienzo
    ctx.fill();
    ctx.stroke();  */
}
limpiar.addEventListener('click', limpiarLienzo);

// CARGAR IMAGEN DESDE EL DISCO
function subirImagen(e){
   
    miCanvas.width=700;
    miCanvas.height=500;
    let reader = new FileReader();
    reader.onload = function(event){
        let img = new Image();
        img.onload = function(){
            if(img.height <= miCanvas.height && img.width <= miCanvas.width) {
                miCanvas.height = img.height;
                miCanvas.width=img.width;
                ctx.drawImage(img,0,0,canvas.width,canvas.height);
            }
            else {
                if(img.height > img.width) {
                    miCanvas.width = Math.floor(miCanvas.height * (img.width / img.height));
                }
                else {
                    miCanvas.height = Math.floor(miCanvas.width * (img.height / img.width));
                   
                }
                ctx.drawImage(img,0,0,canvas.width,canvas.height);
              
               guardar(); 
            } 
        }
        img.src = event.target.result;
        
    }
     
    reader.readAsDataURL(e.target.files[0]);
    
        
}
let seleccionarImg = document.getElementById('seleccionarImg');
seleccionarImg.addEventListener('change', subirImagen, false);
let canvas = document.getElementById('pizarra');

// FUNCION DESCARGAR IMAGEN DEL CANVAS
function descargar(){

    let link = document.getElementById("download");
    link.href = canvas.toDataURL("image/png");
    link.download = "image.png";
}
document.getElementById('descargar').addEventListener("click", descargar);

// NUEVA POSICION DEL EVENTO DEL MOUSE
function setPosition(e) {
    pos.x = e.clientX-rect.left;
    pos.y = e.clientY-rect.top;
    
}

// FUNCION LAPIZ
function draw(e) {
  // mouse left button must be pressed

    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin
  
    ctx.lineWidth = getGrosor();
    
    if(lapiz){
        ctx.lineCap = 'round';
        ctx.strokeStyle = getColor();
  
    }else if (goma){
        ctx.lineCap = 'square';
        ctx.strokeStyle = "#FFFFFF";
    }
    
    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to
  
    ctx.stroke(); // draw it!
}



// FUNCION GOMA
function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, width, height);
        document.getElementById("canvas").style.display = "none";
    }
}

// FUNCION PARA OBTENER EL ROJO EN UNA POSICION DETERMINADA
function getRed(imagedata, x, y){
    ind = (x + y * imagedata.width) * 4;
    return imagedata.data[ind + 0];
}

// FUNCION PARA OBTENER EL VERDE EN UNA POSICION DETERMINADA
function getGreen(imagedata, x, y){
    ind = (x + y * imagedata.width) * 4;
    return imagedata.data[ind + 1];
}

// FUNCION PARA OBTENER EL AZUL EN UNA POSICION DETERMINADA
function getBlue(imagedata, x, y){
    ind = (x + y * imagedata.width) * 4;
    return imagedata.data[ind + 2];
}


function setPixel(imageData,x,y,r,g,b,a){
    let index=(x+y * imageData.width)*4;
    imageData.data[index+0]=r;
    imageData.data[index+1]=g;
    imageData.data[index+2]=b;
    imageData.data[index+3]=a;

}

// FUNCION PARA CONVERCION DE RGB A HSV
function rgbAhsv(r , g , b) {
 
    // R, G, B values are divided by 255
    // to change the range from 0..255 to 0..1
    r = r / 255.0;
    g = g / 255.0;
    b = b / 255.0;

    // h, s, v = hue, saturation, value
    var cmax = Math.max(r, Math.max(g, b)); // maximum of r, g, b
    var cmin = Math.min(r, Math.min(g, b)); // minimum of r, g, b
    var diff = cmax - cmin; // diff of cmax and cmin.
    var h = -1, s = -1;

    // if cmax and cmax are equal then h = 0
    if (cmax == cmin)
        h = 0;

    // if cmax equal r then compute h
    else if (cmax == r)
        h = (60 * ((g - b) / diff) + 360) % 360;

    // if cmax equal g then compute h
    else if (cmax == g)
        h = (60 * ((b - r) / diff) + 120) % 360;

    // if cmax equal b then compute h
    else if (cmax == b)
        h = (60 * ((r - g) / diff) + 240) % 360;

    // if cmax equal zero
    if (cmax == 0)
        s = 0;
    else
        s = (diff / cmax) * 100;

    // compute v
    var v = cmax * 100;
    return ([h.toFixed(1),s,v]);
}

// FUNCION PARA CONVERCION DE HSV A RGB
function hsbtArgb(h, s, b)  {
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [255 * f(5), 255 * f(3), 255 * f(1)];
}

// FUNCION PARA GUARDAR UN ESTADO DEL CANVAS
function guardar(){
    
    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
    
    for(let x=0; x<miCanvas.width;x++){
        for(let y=0; y<miCanvas.height;y++){ 
            
        let r = getRed(imageData,x,y);
        let g = getGreen(imageData,x,y);
        let b = getBlue(imageData,x,y);
        
        copia.push([imageData,x,y,r,g,b,a])
        }
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
    
}

// FUNCION PARA RESTAURAR AL ULTIMO ESTADO GUARDADO DEL CANVAS
function restaurar(){
    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
    for(let i=0; i<copia.length;i++){
        let pos = copia[i];
        let x = pos[1];
        let y = pos[2];
        let r = pos[3];
        let g = pos[4];
        let b = pos[5];
         
        setPixel(imageData,x,y,r,g,b,a);   
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}



////////////////////////////////////////////////////////////////////////
////                           FILTROS                              ////
////////////////////////////////////////////////////////////////////////



// FILTRO NEGATIVO

let a = 255;
function invertirColores(){
    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
    for(let x=0; x<miCanvas.width;x++){


        for(let y=0; y<miCanvas.height;y++){ 
            
        let r = 255 - getRed(imageData,x,y);
        let g = 255 - getGreen(imageData,x,y);
        let b = 255 - getBlue(imageData,x,y);
         
        setPixel(imageData,x,y,r,g,b,a);
        }
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}
document.getElementById('invertirFilter').addEventListener("click", invertirColores);

//======================================================================

// FILTRO GRIS

function drawGrayImg(){

    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);

        for(let x=0; x<miCanvas.width;x++){
            for(let y=0; y<miCanvas.height;y++){ 
                let i = (y * 4) * imageData.width + x * 4;
                let avg = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) /3;
                imageData.data[i] = avg;
                imageData.data[i + 1] = avg;
                imageData.data[i + 2] = avg;
                
            }
        }
        ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}
document.getElementById('grayFilter').addEventListener("click", drawGrayImg);

//======================================================================

// FILTRO SEPIA
function sepia(){
    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
    for(let x=0; x<miCanvas.width;x++){
        for(let y=0; y<miCanvas.height;y++){ 
            let r = getRed(imageData,x,y);
            let g = getGreen(imageData,x,y);
            let b =  getBlue(imageData,x,y);
            let suma=0.3  * r + 0.59 * g + 0.11 * b;
            setPixel(imageData,x,y,suma+100,suma+50,suma,a);
        }
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}

document.getElementById('sepia').addEventListener("click", sepia);

//======================================================================

// FILTRO BRILLO
function brillo(){

    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
    let nuevoRango = document.getElementById('brilloFilter').value;

    for (let i = 0; i < copia.length; i++) {
 
        let pos = copia[i];
        let x = pos[1];
        let y = pos[2];
        let r = pos[3];
        let g = pos[4];
        let b = pos[5];

        let hsv = rgbAhsv(r , g , b);
        let h = hsv[0];
        let s = hsv[1];
        let v = nuevoRango;
     

        let rgb = hsbtArgb(h, s, v);
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];    
        
        setPixel(imageData,x,y,r,g,b,a);
    } ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
    
}
document.getElementById('brilloFilter').addEventListener("change", brillo);

//======================================================================

// FILTRO SATURACION

function saturacion(){

    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
    let nuevoRango = document.getElementById('saturacionFilter').value;

    for (let i = 0; i < copia.length; i++) {
       

        let pos = copia[i];
        let x = pos[1];
        let y = pos[2];
        let r = pos[3];
        let g = pos[4];
        let b = pos[5];

        let hsv = rgbAhsv(r , g , b);
        let h = hsv[0];
        let s = nuevoRango;
        let v = hsv[2];
     

        let rgb = hsbtArgb(h, s, v);
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];    
        
        setPixel(imageData,x,y,r,g,b,a);
    } 
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}

document.getElementById('saturacionFilter').addEventListener("change", saturacion);
//======================================================================

// TONO

function tono(){
  
    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
    let nuevoRango = document.getElementById('tonoFilter').value;

    for (let i = 0; i < copia.length; i++) {
 
        let pos = copia[i];
        let x = pos[1];
        let y = pos[2];
        let r = pos[3];
        let g = pos[4];
        let b = pos[5];

        let hsv = rgbAhsv(r , g , b);
        let h = nuevoRango;
        let s = hsv[1];
        let v = hsv[2];
     

        let rgb = hsbtArgb(h, s, v);
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];    
        
        setPixel(imageData,x,y,r,g,b,a);
    } ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
    
}
document.getElementById('tonoFilter').addEventListener("change", tono);

//======================================================================

// FILTRO BLUR
function blur() {
   
    let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
    let r;
    let g;
    let b;
  
    for(let x=0; x<miCanvas.width;x++){


        for(let y=0; y<miCanvas.height;y++){ 
        
        let r1 = getRed(imageData,x,y);
        let r2 = getRed(imageData,x-1,y-1);
        let r3 = getRed(imageData,x,y-1);
        let r4 = getRed(imageData,x+1,y-1);
        let r5 = getRed(imageData,x-1,y);
        let r6 = getRed(imageData,x+1,y);
        let r7 = getRed(imageData,x-1,y+1);
        let r8 = getRed(imageData,x,y+1);
        let r9 = getRed(imageData,x+1,y+1);

        r = (r1+r2+r3+r4+r5+r6+r7+r8+r9)/9;
        
        let g1 = getGreen(imageData,x,y);
        let g2 = getGreen(imageData,x-1,y-1);
        let g3 = getGreen(imageData,x,y-1);
        let g4 = getGreen(imageData,x+1,y-1);
        let g5 = getGreen(imageData,x-1,y);
        let g6 = getGreen(imageData,x+1,y);
        let g7 = getGreen(imageData,x-1,y+1);
        let g8 = getGreen(imageData,x,y+1);
        let g9 = getGreen(imageData,x+1,y+1);

        g = (g1+g2+g3+g4+g5+g6+g7+g8+g9)/9;
        
        let b1 = getBlue(imageData,x,y);
        let b2 = getBlue(imageData,x-1,y-1);
        let b3 = getBlue(imageData,x,y-1);
        let b4 = getBlue(imageData,x+1,y-1);
        let b5 = getBlue(imageData,x-1,y);
        let b6 = getBlue(imageData,x+1,y);
        let b7 = getBlue(imageData,x-1,y+1);
        let b8 = getBlue(imageData,x,y+1);
        let b9 = getBlue(imageData,x+1,y+1);

        b = (b1+b2+b3+b4+b5+b6+b7+b8+b9)/9;
            
        setPixel(imageData,x,y,r,g,b,a);
        }
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);


}
 
   document.getElementById('blur').addEventListener("click", blur);

//======================================================================
//FILTRO BLANCO Y NEGRO
//======================================================================
function blackAndWhite(){
    let imgData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);
   for (i = 0; i < imgData.data.length; i += 4) {
        let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
        let colour = 0;
        if (count > 383) colour = 255;
        
        imgData.data[i] = colour;
        imgData.data[i + 1] = colour;
        imgData.data[i + 2] = colour;
        imgData.data[i + 3] = 255;
       
    }

    ctx.putImageData(imgData, 0, 0, 0, 0, imgData.width, imgData.height);
}

document.getElementById('blancoNegro').addEventListener("click", blackAndWhite);

////////////////////////////////////////////////////////////////////////
////                           EVENTOS                              ////
////////////////////////////////////////////////////////////////////////

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseup', setPosition);

document.getElementById('lapiz').addEventListener("click", dibujarLapiz);
document.getElementById('goma').addEventListener("click", dibujargoma);

document.getElementById('guardar').addEventListener("click", guardar);
document.getElementById('restaurar').addEventListener("click", restaurar);