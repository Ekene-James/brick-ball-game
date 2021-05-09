export default class Paddle {
    constructor(game){

        this.width = 150;
        this.height =30;
        this.gameWidth =game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.position = {
            x : this.gameWidth/2 - this.width/2,
            y: this.gameHeight - this.height - 10
        };
        this.speed = 0;
        this.maxSpeed = 10;
    }
    moveLeft(){
        this.speed = -this.maxSpeed;

    }
    moveRight(){
        this.speed = this.maxSpeed;

    }
    stop(){
        this.speed = 0;
    }

    draw(ctx){
        ctx.fillStyle= '#0ff'
        ctx.fillRect(this.position.x,this.position.y, this.width, this.height)
    }
    update(){
        this.position.x += this.speed;

        //to make sure it stops at the left edge of the game frame;
        if(this.position.x < 0) this.position.x = 0

        //to make sure it stops at the left edge of the game frame;
        if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }
}