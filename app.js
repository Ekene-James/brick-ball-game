
import Game from './game.js';
import Info from './info.js';
const canvas = document.getElementById('gameScreen');
const info = document.getElementById('info');

const ctx = canvas.getContext('2d');
const infoCtx = info.getContext('2d');
const GAME_WIDTH=800;
const GAME_HEIGHT=600;



const game = new Game(GAME_WIDTH, GAME_HEIGHT );
const infoClass = new Info(game);

function gameLoop(){
    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT)
   
//upadate moves the position of paddle along x wtr to the deltaTime
infoClass.draw(infoCtx);

game.update();
game.draw(ctx);

requestAnimationFrame(gameLoop);

}
requestAnimationFrame(gameLoop);