class Ficha{

    constructor(ctx,img,x,y,posX,posY){
        this.ctx=ctx;
        this.img=img;
        this.x=x;
        this.y=y;
        this.posX=posX;
        this.posY=posY;
    }

    cargarImagen (){
        let imageObj = new Image();
        imageObj.src = 'img/'+ this.img+ '.jpeg';
        imageObj.draggable=true;
        imageObj.id=="event_drag"
        imageObj.id="imgFicha";
     /*   imageObj.ondragstart=function(e){

                console.log("drag start");
            
        }*/
        imageObj.onload = function () {
            ctx.drawImage( imageObj, 0, 0 ,75,75); 
       } 
       
	
    }

    //solo para ficha redonda
  
    isPointInside(x,y){
        console.log("mouse dentro?");
        let _x=this.posX - x;//posicion del circulo - la posicion de donde esta el mouse
        let _y=this.posY - y;
        return Math.sqrt(_x*_x + _y*_y)< this.radius;
        //si la distancia es menor al radio, estoy adentro del circulo
    }
 
    drag(e){
        e.dataTransfer.setData("img",ev.target.id);
        console.log("esta arrastrando");
    }
    
    /*drop(e){
        e.preventDefault();
        let data= e.dataTransfer.getData("img");
        e.target.appendChild(document.getElementById(data));
    }*/

    
}