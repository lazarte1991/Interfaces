class Ficha{

    constructor(ctx){
        this.ctx=ctx;
    }
    

    cargarImagen (){
        let imageObj = new Image();
        imageObj.src = 'img/1.jpeg';
        imageObj.onload = function () {
            //falta redimensionar imagen
            ctx.drawImage( imageObj, 0, 0 );
            
        }
    };
}