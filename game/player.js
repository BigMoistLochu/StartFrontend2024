export class Player {
    
    constructor(name, x, y, tileSize) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
    }

    getXPosition(){
        return this.x;
    }

    getYPosition(){
        return this.y;
    }

    setXPosition(x){
        this.x = x;
    }

    setYPosition(y){
        this.y = y;
    }

    moveDown(){
        this.setYPosition(this.getYPosition()+100);
    }

}