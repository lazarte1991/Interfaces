"use strict"
////////////////////////////////////////////////////////////////////////
////                           VARIABLES                            ////
////////////////////////////////////////////////////////////////////////

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
let widthCanvas = 700;
let heightCanvas = 600;
canvas.width = widthCanvas;
canvas.height = heightCanvas;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let a = 255;

let copia = [];

let correccionX = 0;
let correccionY = 0;
let pintarLinea = false;

// Marca el nuevo punto
let nuevaPosicionX = 0;
let nuevaPosicionY = 0;

let pos = { x: 0, y: 0};
let rect=canvas.getBoundingClientRect();//devuelve el tamaño de un elemento 
//y su posición relativa respecto a la ventana de visualización
let lapiz=true;
let goma;

////////////////////////////////////////////////////////////////////////
////                           FUNCIONES                            ////
////////////////////////////////////////////////////////////////////////


function getColor(){
    return document.getElementById('seleccionarColor').value;//Devuelve el color seleccionado en el selector de colores.
}

function getGrosor(){
    return document.getElementById('seleccionarGrosor').value;//Devuelve el grosor seleccionado en el selector de grosor.
}

//Setea el lápiz en true para poder dibujar.
function dibujarLapiz(){
   lapiz=true;
   goma=false;
}

//Setea la goma en true para poder borrar.
function dibujargoma(){
   lapiz=false;
   goma=true;
}

// LIMPIAR EL LIENZO
function limpiarLienzo(){
    canvas.width = widthCanvas; //Reinicia el ancho original del canvas.
    canvas.height = heightCanvas; //Reinicia el alto original del canvas.
    ctx.clearRect(0,0,canvas.width,canvas.height); //Elimina el contenido actual.
    ctx.fillStyle = "rgba(255,255,255,255)";//Se vuelve a pintar de blanco el lienzo
    ctx.fillRect(0, 0, canvas.width, canvas.height);//rellena el lienzo de blanco
    seleccionarImg.value = null; //El input para subir imagen se vuelve null para eliminar el nombre de la ultima imagen seleccionada
                                // y poder volver a subir la misma ya que funciona con el evento 'change'.

}


// CARGAR IMAGEN DESDE EL DISCO
function subirImagen(e){
   
    canvas.width=widthCanvas; //Inicia la funcion a partir de las medidas originales del canvas
    canvas.height=heightCanvas;
    let reader = new FileReader(); // Permite que las aplicaciones web lean ficheros (o información en buffer) almacenados en el cliente de forma asíncrona.
    reader.onload = function(event){
        let img = new Image(); //Se crea una nueva instancia de imagen.
        img.onload = function(){
            //se tienen en cuenta distintas posibilidades respecto al tamaño de la imágen y qué hacer en cada caso
            if(img.height <= canvas.height && img.width <= canvas.width) {
                canvas.height = img.height;
                canvas.width=img.width;
                ctx.drawImage(img,0,0,canvas.width,canvas.height);
            }
            else {
                if(img.height > img.width) {
                    canvas.width = Math.floor(canvas.height * (img.width / img.height));
                }
                else {
                    canvas.height = Math.floor(canvas.width * (img.height / img.width));
                   
                }
                ctx.drawImage(img,0,0,canvas.width,canvas.height);
              
               guardar(); 
            } 
        }
        img.src = event.target.result;
        
    }
     
    reader.readAsDataURL(e.target.files[0]);//contiene la informacion como una url
    
        
}


// FUNCION DESCARGAR IMAGEN DEL CANVAS
function descargar(){

    let link = document.getElementById("download");
    link.href = canvas.toDataURL("image/png"); //devuelve un data URI el cual contiene una representación de la imagen en el formato especificado por el parámetro type
    link.download = "image.png"; //
}


// NUEVA POSICION DEL EVENTO DEL MOUSE
function setPosition(e) {
    pos.x = e.clientX-rect.left;
    pos.y = e.clientY-rect.top;
    
}

// FUNCION LAPIZ
function draw(e) {
  // Para que funcione, tiene que estar presionado el botón izquierdo del mouse
    if (e.buttons !== 1) return;

    ctx.beginPath(); // comienza una secuencia de puntos unidos
  
    ctx.lineWidth = getGrosor();//establece el grosor con el que se dibujará el trazado
    
    if(lapiz){//en caso que sea lápiz
        ctx.lineCap = 'round';//establece la forma en la que se dibujará
        ctx.strokeStyle = getColor();//establece el color de la linea
        
  
    }else if (goma){//en caso que se goma
 
        ctx.lineCap = 'square';//se establece la forma cuadrada
        ctx.strokeStyle = "#FFFFFF";//establece el color blanco para el trazado
    }
    
    ctx.moveTo(pos.x, pos.y); //mueve la ruta al punto especificado en el lienzo
    setPosition(e);//establece la posición
    ctx.lineTo(pos.x, pos.y); // agrega una línea conectando las coordenadas especificadas .
  
    ctx.stroke(); // dibuja
}


// FUNCION PARA OBTENER EL ROJO EN UNA POSICION DETERMINADA
function getRed(imagedata, x, y){
   let ind = (x + y * imagedata.width) * 4;//convierte la matriz en un arreglo
    return imagedata.data[ind + 0];//se utiliza el arreglo correspondiente al rojo
}

// FUNCION PARA OBTENER EL VERDE EN UNA POSICION DETERMINADA
function getGreen(imagedata, x, y){
    let ind = (x + y * imagedata.width) * 4;//convierte la matriz en un arreglo
    return imagedata.data[ind + 1];//se utiliza el arreglo correspondiente al verde
}

// FUNCION PARA OBTENER EL AZUL EN UNA POSICION DETERMINADA
function getBlue(imagedata, x, y){
    let ind = (x + y * imagedata.width) * 4;//convierte la matriz en un arreglo
    return imagedata.data[ind + 2];//se utiliza el arreglo correspondiente al azul
}


function setPixel(imageData,x,y,r,g,b,a){//establece el píxel en las coordenadas especificadas al color especificado
    let index=(x+y * imageData.width)*4;//convierte la matriz en un arreglo
    imageData.data[index+0]=r;//el color especificado en rojo
    imageData.data[index+1]=g;//el color especificado en verde
    imageData.data[index+2]=b;//el color especificado en azul
    imageData.data[index+3]=a;//el color especificado en alpha

}

// FUNCION PARA CONVERCION DE RGB A HSV
function rgbAhsv(r , g , b) {
 
    //los valores r,g y b se dividen por 255 para cambiar el rango de 0..255 a 0..1
    r = r / 255.0;
    g = g / 255.0;
    b = b / 255.0;

    // h, s, v = tono, saturacion, brillo
    let cmax = Math.max(r, Math.max(g, b)); // maximo de r, g, b
    let cmin = Math.min(r, Math.min(g, b)); // minimo de r, g, b
    let diff = cmax - cmin; // diferencia entre le máximo y el mínimo
    let h = -1;
    let s = -1;

    if (cmax == cmin)
        h = 0;

    else if (cmax == r)
        h = (60 * ((g - b) / diff) + 360) % 360;

    else if (cmax == g)
        h = (60 * ((b - r) / diff) + 120) % 360;

    else if (cmax == b)
        h = (60 * ((r - g) / diff) + 240) % 360;

    if (cmax == 0)
        s = 0;
    else
        s = (diff / cmax) * 100;

    let v = cmax * 100;
    return ([h.toFixed(1),s,v]);//convierte la variable h en una cadena, especificando el numero exacto de decimales 
}

// FUNCION PARA CONVERSION DE HSV A RGB
function hsbtArgb(h, s, b)  {
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [255 * f(5), 255 * f(3), 255 * f(1)];
}

// FUNCION PARA GUARDAR UN ESTADO DEL CANVAS
function guardar(){
    
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    for(let x=0; x<canvas.width;x++){//recorre el ancho del canvas
        for(let y=0; y<canvas.height;y++){ //recorre el alto del canvas
            
        let r = getRed(imageData,x,y);//toma el valor de rojo
        let g = getGreen(imageData,x,y);//toma el valor de verde
        let b = getBlue(imageData,x,y);//toma el valor de azul
        
        copia.push([imageData,x,y,r,g,b,a])//guarda en el arreglo los datos
        }
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
    //dibuja la información de pixeles en el canvas
    
}

// FUNCION PARA RESTAURAR AL ULTIMO ESTADO GUARDADO DEL CANVAS
function restaurar(){
    //recorre el arreglo copia y toma los valores de cada posición para imprimirlos en el canvas
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
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


function invertirColores(){

    //recorre el canvas y en cada posición se pide cada color a través de su función. Por cada
    //color, se resta a 255 el valor del color para obtener su valor inverso.
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for(let x=0; x<canvas.width;x++){

        for(let y=0; y<canvas.height;y++){ 
            
        let r = 255 - getRed(imageData,x,y);
        let g = 255 - getGreen(imageData,x,y);
        let b = 255 - getBlue(imageData,x,y);
         
        setPixel(imageData,x,y,r,g,b,a);
        }
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}


//======================================================================

// FILTRO GRIS

function aplicarGris(){

    //recorre el canvas y en cada posición se pide cada color a través de su función.
    //Luego, se suman los valores de r, g y b y se los divide por 3 para tomar el promedio de colores.
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        for(let x=0; x<canvas.width;x++){
            for(let y=0; y<canvas.height;y++){ 
                let i = (y * 4) * imageData.width + x * 4;//convierte la matriz en arreglo
                let avg = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) /3;
                imageData.data[i] = avg;
                imageData.data[i + 1] = avg;
                imageData.data[i + 2] = avg;
                
            }
        }
        ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}


//======================================================================

// FILTRO SEPIA
function sepia(){

    //recorre el canvas y en cada posición se pide cada color a través de su función.
    //Luego, aplicando la formula determina el valor a devolver de cada color.

    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for(let x=0; x<canvas.width;x++){
        for(let y=0; y<canvas.height;y++){ 
            let r = getRed(imageData,x,y);
            let g = getGreen(imageData,x,y);
            let b =  getBlue(imageData,x,y);
            let suma=0.3  * r + 0.59 * g + 0.11 * b;
            setPixel(imageData,x,y,suma+100,suma+50,suma,a);
        }
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}



//======================================================================

// FILTRO BRILLO
function brillo(){

    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //Se toma el valor del input range del html
    let nuevoRango = document.getElementById('brilloFilter').value;

    //Se toman los valores x, y,r,g,b de la copia de la imágen
    for (let i = 0; i < copia.length; i++) {
 
        let pos = copia[i];
        let x = pos[1];
        let y = pos[2];
        let r = pos[3];
        let g = pos[4];
        let b = pos[5];

        //Se convierten los valores de rgb a hsv, llamando a la función y pasandolos por parámetro
        let hsv = rgbAhsv(r , g , b);
        let h = hsv[0];
        let s = hsv[1];
        let v = nuevoRango;//se setea el nuevo valor del brillo según el input
     

        //Con el nuevo valor del brillo, se vuelve a convertir los colores a formato rgb, llamando a la función. 
        let rgb = hsbtArgb(h, s, v);
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];    
        
        setPixel(imageData,x,y,r,g,b,a);
    } ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
    
}


//======================================================================

// FILTRO SATURACION

function saturacion(){

    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //Se toma el valor del input range del html
    let nuevoRango = document.getElementById('saturacionFilter').value;
    //Se toman los valores x, y,r,g,b de la copia de la imágen
    for (let i = 0; i < copia.length; i++) {
       

        let pos = copia[i];
        let x = pos[1];
        let y = pos[2];
        let r = pos[3];
        let g = pos[4];
        let b = pos[5];
         //Se convierten los valores de rgb a hsv, llamando a la función y pasandolos por parámetro
        let hsv = rgbAhsv(r , g , b);
        let h = hsv[0];
        let s = nuevoRango;
        let v = hsv[2];
     
        //Con el nuevo valor de saturación, se vuelve a convertir los colores a formato rgb, llamando a la función. 
        let rgb = hsbtArgb(h, s, v);
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];    
        
        setPixel(imageData,x,y,r,g,b,a);
    } 
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
}


//======================================================================

// TONO

function tono(){
  
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //Se toma el valor del input range del html
    let nuevoRango = document.getElementById('tonoFilter').value;
    //Se toman los valores x, y,r,g,b de la copia de la imágen
    for (let i = 0; i < copia.length; i++) {
 
        let pos = copia[i];
        let x = pos[1];
        let y = pos[2];
        let r = pos[3];
        let g = pos[4];
        let b = pos[5];

         //Se convierten los valores de rgb a hsv, llamando a la función y pasandolos por parámetro
        let hsv = rgbAhsv(r , g , b);
        let h = nuevoRango;
        let s = hsv[1];
        let v = hsv[2];
     
        //Con el nuevo valor del tono, se vuelve a convertir los colores a formato rgb, llamando a la función. 
        let rgb = hsbtArgb(h, s, v);
        r = rgb[0];
        g = rgb[1];
        b = rgb[2];    
        
        setPixel(imageData,x,y,r,g,b,a);
    } ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
    
}


//======================================================================

// FILTRO BLUR
function blur() {
   
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let r;
    let g;
    let b;
  
    for(let x=0; x<canvas.width;x++){

        for(let y=0; y<canvas.height;y++){ 
        //por cada posición, se pide el color rojo de esa posición y las ocho posiciones mas cercanas
        //(arriba, abajo, izquierda, derecha y esquinas, en total 9 valores que sumados y luego 
        // divididos por 9 determinaran el valor del rojo en esa posición)
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
        
        //por cada posición, se pide el color verde de esa posición y las ocho posiciones mas cercanas
        //(arriba, abajo, izquierda, derecha y esquinas, en total 9 valores que sumados y luego 
        // divididos por 9 determinaran el valor del verde en esa posición)
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
        
        //por cada posición, se pide el color azul de esa posición y las ocho posiciones mas cercanas
        //(arriba, abajo, izquierda, derecha y esquinas, en total 9 valores que sumados y luego 
        // divididos por 9 determinaran el valor del azul en esa posición)
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
 


//======================================================================
//FILTRO BLANCO Y NEGRO
//======================================================================
function blancoYNegro(){

    //suma el color rojo, verde y azul. Si la suma de los 3 colores supera 383, setea el color en 
    //blanco, de lo contrario aplica negro.
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
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

//======================================================================
//FILTRO SOBEL
//======================================================================
function sobel() {
   
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let r;
    let g;
    let b;
  
    for(let x=0; x<canvas.width;x++){

        for(let y=0; y<canvas.height;y++){ 
        //por cada posición, se pide el color rojo de las ocho posiciones mas cercanas
        //(arriba, abajo, izquierda, derecha y esquinas,y según la posición se multiplica 
        //por numeros entre -2 y 2)
            let r1 = getRed(imageData,x-1,y+1) * 1;
            let r2 = getRed(imageData,x,y+1) * 2;
            let r3 = getRed(imageData,x+1,y+1) * 1;
            let r4 = getRed(imageData,x+1,y) * 0;
            let r5 = getRed(imageData,x+1,y-1) * -1;
            let r6 = getRed(imageData,x,y-1) * -2;
            let r7 = getRed(imageData,x-1,y-1) * -1;
            let r8 = getRed(imageData,x-1,y) * 0;
             // let r9 = getRed(imageData,x,y);

            let r9 = getRed(imageData,x-1,y+1) * -1;//*
            let r10 = getRed(imageData,x,y+1) * 0;//*
            let r11 = getRed(imageData,x+1,y+1) * 1;//*
            let r12 = getRed(imageData,x+1,y) * 2;//*
            let r13 = getRed(imageData,x+1,y-1) * 1;//*
            let r14 = getRed(imageData,x,y-1) * 0;//*
            let r15 = getRed(imageData,x-1,y-1) * -1;//*
            let r16 = getRed(imageData,x-1,y) * -2;//*

            let rx = r1+r2+r3+r4+r5+r6+r7+r8;
            let ry = r9+r10+r11+r12+r13+r14+r15+r16;

            r = 255 - Math.sqrt(rx * rx + ry * ry);
       
        
            let g1 = getGreen(imageData,x-1,y+1) * 1;
            let g2 = getGreen(imageData,x,y+1) * 2;
            let g3 = getGreen(imageData,x+1,y+1) * 1;
            let g4 = getGreen(imageData,x+1,y) * 0;
            let g5 = getGreen(imageData,x+1,y-1) * -1;
            let g6 = getGreen(imageData,x,y-1) * -2;
            let g7 = getGreen(imageData,x-1,y-1) * -1;
            let g8 = getGreen(imageData,x-1,y) * 0;
            // let g9 = getRed(imageData,x,y);

            let g9 = getGreen(imageData,x-1,y+1) * -1;//*
            let g10 = getGreen(imageData,x,y+1) * 0;//*
            let g11 = getGreen(imageData,x+1,y+1) * 1;//*
            let g12 = getGreen(imageData,x+1,y) * 2;//*
            let g13 = getGreen(imageData,x+1,y-1) * 1;//*
            let g14 = getGreen(imageData,x,y-1) * 0;//*
            let g15 = getGreen(imageData,x-1,y-1) * -1;//*
            let g16 = getGreen(imageData,x-1,y) * -2;//*

        
            let gx = g1+g2+g3+g4+g5+g6+g7+g8;
            let gy = g9+g10+g11+g12+g13+g14+g15+g16;

            g = 255 - Math.sqrt(gx * gx + gy * gy);
         

            let b1 = getBlue(imageData,x-1,y+1) * 1;
            let b2 = getBlue(imageData,x,y+1) * 2;
            let b3 = getBlue(imageData,x+1,y+1) * 1;
            let b4 = getBlue(imageData,x+1,y) * 0;
            let b5 = getBlue(imageData,x+1,y-1) * -1;
            let b6 = getBlue(imageData,x,y-1) * -2;
            let b7 = getBlue(imageData,x-1,y-1) * -1;
            let b8 = getBlue(imageData,x-1,y) * 0;
            // let b9 = getRed(imageData,x,y);

            let b9 = getBlue(imageData,x-1,y+1) * -1;//*
            let b10 = getBlue(imageData,x,y+1) * 0;//*
            let b11 = getBlue(imageData,x+1,y+1) * 1;//*
            let b12 = getBlue(imageData,x+1,y) * 2;//*
            let b13 = getBlue(imageData,x+1,y-1) * 1;//*
            let b14 = getBlue(imageData,x,y-1) * 0;//*
            let b15 = getBlue(imageData,x-1,y-1) * -1;//*
            let b16 = getBlue(imageData,x-1,y) * -2;//*


            let bx = b1+b2+b3+b4+b5+b6+b7+b8;
            let by = b9+b10+b11+b12+b13+b14+b15+b16;

            b = 255 - Math.sqrt(bx * bx + by * by);
 

                   
            setPixel(imageData,x,y,r,g,b,a);
        }
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);


}
 


//======================================================================

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

limpiar.addEventListener('click', limpiarLienzo);

document.getElementById('blancoNegro').addEventListener("click", blancoYNegro);
document.getElementById('blur').addEventListener("click", blur);
document.getElementById('tonoFilter').addEventListener("change", tono);
document.getElementById('brilloFilter').addEventListener("change", brillo);
document.getElementById('invertirFilter').addEventListener("click", invertirColores);
document.getElementById('saturacionFilter').addEventListener("change", saturacion);
document.getElementById('sepia').addEventListener("click", sepia);
document.getElementById('grayFilter').addEventListener("click", aplicarGris);
document.getElementById('seleccionarImg').addEventListener('change', subirImagen, false);
document.getElementById('descargar').addEventListener("click", descargar);
document.getElementById('sobelFilter').addEventListener("click", sobel);
