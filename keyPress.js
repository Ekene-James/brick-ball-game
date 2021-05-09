export default class KeyPress{
    constructor(paddle,game){
        document.addEventListener('keydown', e => {
            switch(e.keyCode){
                //left key
                case 37 : 
                return paddle.moveLeft();
                
                //right key
                case 39 : 
                return paddle.moveRight();
                case 27 : 
                return game.togglePause();
                case 32 : 
                return game.start();
                case 16 : 
                return game.newLevel();
                case 82 : 
                return game.restartGame();
               
                default : return;
            }
        })
        document.addEventListener('keyup', e => {
            switch(e.keyCode){
                //left key
                case 37 : 
                if(paddle.speed < 0) return paddle.stop();

                //right key
                case 39 : 
                if(paddle.speed > 0) return paddle.stop();

                default : return;
            }
        })
    }
} 