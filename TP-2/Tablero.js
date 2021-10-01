class Tablero {
    constructor(canvasX, canvasY, ctx){
        //this.width = width;
        //this.height = height;
        this.canvasX = canvasX;
        this.canvasY = canvasY;
        this.ctx = ctx;
    }

draw(xWidth,yHeight){
    let posX = (this.canvasX / 2) - (xWidth / 2);
    let posY = (this.canvasY / 2) - (yHeight / 2);
    ctx.fillStyle = "#3393B5";
    ctx.fillRect(posX, posY, xWidth, yHeight);
    let xAux=posX+75;
    let yAux=posY+75; 
    for (let x = 0; x < xWidth; x+=75) {
        if (x  != posX) {
            for (let y = 0; y < yHeight; y+=75) {
                if (y != posY && xAux<(this.canvasX/2)+ (xWidth/2) && yAux<(this.canvasY/2)+ (yHeight/2)) {
                    let casillero = new CasilleroCirculo(xAux, yAux, ctx);
                    yAux+=75;
                    casillero.draw();              
                }
                 
            } 
            yAux=posY+75;
            xAux+=75;
        }
       
    }


}
}