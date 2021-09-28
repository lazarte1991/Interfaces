class Tablero {
    constructor(width, height, canvasX, canvasY, ctx){
        this.width = width;
        this.height = height;
        this.canvasX = canvasX;
        this.canvasY = canvasY;
        this.ctx = ctx;
    }

draw(){
    let posX = (this.canvasX / 2) - (this.width / 2);
    let posY = (this.canvasY / 2) - (this.height / 2);
    ctx.fillStyle = "#3393B5";
    ctx.fillRect(posX, posY, this.width, this.height);
}

}