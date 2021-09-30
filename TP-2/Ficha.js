class Ficha{

    constructor(ctx){
        this.ctx=ctx;
        //this.fichas=[];
    }

    cargarImagen (){
        let imageObj = new Image();
        imageObj.src = 'img/1.jpeg';
        imageObj.onload = function () {
            ctx.drawImage( imageObj, 0, 0 ,75,75); 
        }
    }

   /* agregarFicha(){
        this.fichas.push(ficha);
    }

    eliminarFicha(){
        this.fichas.pop(ficha);
    }*/
}