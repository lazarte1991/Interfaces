class CasilleroCuadrado extends Casillero{


    constructor(x, y, ctx,width, height){
        super(x,y,ctx);
        this.width=width;
        this.height=height;
    }

    draw(){
        this.ctx.fillRect(this.x,this.y,40,40);
        this.ctx.strokeRect(this.x,this.y,40,40);
    }
}