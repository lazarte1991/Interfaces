class Ficha{

    constructor(ctx,img){
        this.ctx=ctx;
        console.log("img en ficha " + img);
        this.img=img;
    }

    cargarImagen (img){
        let imageObj = new Image();
        imageObj.src = 'img/'+ this.img+ '.jpeg';
        imageObj.onload = function () {
            ctx.drawImage( imageObj, 0, 0 ,75,75); 
        }
    }

    //solo para ficha redonda
    isPointInside(x,y){
        let _x=this.posX - x;//posicion del circulo - la posicion de donde esta el mouse
        let _y=this.posY - y;
        return Math.sqrt(_x*_x + _y*_y)< this.radius;
        //si la distancia es menor al radio, estoy adentro del circulo
    }
   /* agregarFicha(){
        this.fichas.push(ficha);
    }

    eliminarFicha(){
        this.fichas.pop(ficha);
    }*/
}