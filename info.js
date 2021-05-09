export default class Info {
    constructor(game){

        
        this.lives = game.lives;
        this.width= 300
        this.height= 600
        this.game = game;
    }
 

    draw(ctx){
        ctx.clearRect(0,0, 300, 600);
    
        ctx.fill()
        ctx.font= '20px Arial';
        ctx.fillStyle='black';
        ctx.textAlign= "center"
        ctx.fillText(`Current Level:${this.game.currentLevel + 1}`, this.width/2, 50)
        ctx.fillText(`Remaining Lives:${this.game.lives}`, this.width/2, 90)
        ctx.fillText(`Press Esc to toggle Pause/Play`, this.width/2, 150)
        
    }
    
}