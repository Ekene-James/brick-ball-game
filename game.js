import Paddle from './paddle.js';
import KeyPress from './keyPress.js';
import Ball from './ball.js';
import Brick from './bricks.js';
//import Info from './info.js';
import { buildBricks, level1,level2,level3,level4,level5,level6 } from './levels.js';


const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
  };

export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.lives = 3;
        this.score=0;
        this.paddle = new Paddle(this)
       
        this.ball = new Ball(this)
        this.gameState = GAMESTATE.MENU;
        this.currentLevel=0;
        this.levels=[level1,level2,level3,level4,level5,level6]
      
        new KeyPress(this.paddle,this);

        this.brick = new Brick(this, {x : 20, y: 20});
        this.bricks = buildBricks(this, this.levels[this.currentLevel]);
       
        
        this.gameObj = [this.paddle,this.ball,...this.bricks]
    }

    drawMenuScreen(ctx, txt, opacity) {
        ctx.rect(0,0, this.gameWidth, this.gameHeight);
           
        ctx.fillStyle=`rgba(0,0,0,${opacity})`;
        ctx.fill()
        ctx.font= '30px Arial';
        ctx.fillStyle='white';
        ctx.textAlign= "center"
        ctx.fillText(txt, this.gameWidth/2, this.gameHeight/2)
    }

start(){
    if( this.gameState !== GAMESTATE.MENU) return;
    this.gameState=GAMESTATE.RUNNING;
    
}
restartGame(){
    if(this.gameState === GAMESTATE.GAMEOVER){
        this.currentLevel = 0;
        this.lives = 3
        this.bricks = buildBricks(this, this.levels[this.currentLevel]);
        this.gameObj = [this.paddle,this.ball,...this.bricks]
        this.ball.reset();
        this.gameState=GAMESTATE.MENU;

        
    }
}

newLevel(){
    if ( this.gameState === GAMESTATE.NEWLEVEL) {
        this.bricks = buildBricks(this, this.levels[this.currentLevel]);
        this.gameObj = [this.paddle,this.ball,...this.bricks]
        this.ball.reset();
        this.gameState=GAMESTATE.RUNNING;
    }
  
        
}
    
    update(){
     
     //dont draw anything on the screen if the gamestate is in the below state
        if (this.gameState === GAMESTATE.PAUSED
            || this.gameState === GAMESTATE.MENU            
            || this.gameState === GAMESTATE.NEWLEVEL) {
            return;
        }
        if(this.lives === 0) this.gameState = GAMESTATE.GAMEOVER;


// If the gameObj array has only two items in it, means that the bricks with 'marked for deletion' is filtered out from the filter function below,
//remaining only the paddle and ball class;
//this means that no brick is drawn on the screen;
        if(this.gameObj.length === 2) {
            this.currentLevel++ 
            this.gameState = GAMESTATE.NEWLEVEL;
            ;}
        
            if(this.currentLevel > this.levels.length){
                this.currentLevel = 0;
            }
//filter out the brick class that markedForDeletion !== true, so that when the update function runs, it woudnt draw them on the screen
        this.gameObj =this.gameObj.filter(brick => !brick.markedForDeletion);

//this basically loops through the gameObj array,for each item/class, call the update function of its class which just sets a new 
//position for an obj to be drawn when the draw function calls  
        this.gameObj.forEach(obj =>obj.update());
       
     
    }
    draw(ctx){
        //draw an obj in a new position
        this.gameObj.forEach(obj => obj.draw(ctx));

        if(this.gameState === GAMESTATE.PAUSED) this.drawMenuScreen(ctx, "PAUSED", "0.5");
        
        if(this.gameState === GAMESTATE.MENU) this.drawMenuScreen(ctx, "Hit space bar to start!!", "1");
        if(this.gameState === GAMESTATE.GAMEOVER) this.drawMenuScreen(ctx, "GAME OVER!!, press R to restart", "1");
        if(this.gameState === GAMESTATE.NEWLEVEL) this.drawMenuScreen(ctx, "Press Shift key to enter new level", "0.5");
        
    }
    togglePause(){
        if(this.gameState === GAMESTATE.RUNNING || this.gameState === GAMESTATE.PAUSED) {

            this.gameState === GAMESTATE.RUNNING ? (this.gameState = GAMESTATE.PAUSED) : (this.gameState = GAMESTATE.RUNNING)
        }
        
            
        
        

    }
}