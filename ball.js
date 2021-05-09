import { collisionDetection } from "./collisionDetection.js";

export default class Ball{
constructor(game){
this.ballImg = document.getElementById('ballImg');


this.size = 20;
this.gameWidth=game.gameWidth;
this.gameHeight=game.gameHeight;
this.game= game;
this.reset();
}
draw(ctx){
ctx.drawImage(this.ballImg,this.position.x,this.position.y, this.size,this.size);
};
reset(){
    this.position = {
        x: 100,
        y : 400
    };
    this.speed = {
        x:5,
        y: -5
    };
}

update(){
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
//side of walls
    if(this.position.x < 0 || this.position.x > this.gameWidth - this.size ) this.speed.x =- this.speed.x;
//top 
    if(this.position.y < 0 ) this.speed.y =- this.speed.y;
// bottom for game over
    if( this.position.y > this.gameHeight - this.size ){

        this.game.lives--;
        this.reset()
    }
  
//hitting paddle
if(collisionDetection(this, this.game.paddle)){
    this.speed.y = - this.speed.y
    this.position.y = this.game.paddle.position.y - this.size
}



}

} 