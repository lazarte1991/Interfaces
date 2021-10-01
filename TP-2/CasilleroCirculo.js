class CasilleroCirculo extends Casillero {

    constructor(x, y, ctx,radio){
        super(x,y,ctx);
        this.radio=radio;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "#ffffff";
        this.ctx.lineWidth = 5;
        this.ctx.arc(this.x, this.y, 30, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }

}