import { collisionDetection } from "./collisionDetection.js";

const brickImg = document.getElementById('brick')
export default class Bricks{
    constructor(game, position){
        this.width = 55;
        this.height = 24;

        this.position = position;
        this.game= game;
        this.markedForDeletion = false;

    }

    draw(ctx){
        ctx.drawImage(brickImg, this.position.x,this.position.y, this.width, this.height)
    }
    update(){
        if(collisionDetection(this.game.ball,this)){
            this.game.ball.speed.y = - this.game.ball.speed.y;
            this.markedForDeletion = true;
        }
    }

}