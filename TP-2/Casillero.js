class Casillero {
    constructor(x, y, ctx){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "#3393B5";
        this.ctx.lineWidth = 5;
        this.ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }




    
}