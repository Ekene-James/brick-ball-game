export function collisionDetection(ball, gameObj){
    const topOfBall = ball.position.y;
    const bottomOfBall = ball.position.y + ball.size;
    
   
    const topOfObj = gameObj.position.y;
    const leftOfObj = gameObj.position.x;
    const rightOfObj = gameObj.position.x + gameObj.width
    const bottomOfObj = gameObj.position.y + gameObj.height

if(bottomOfBall  >= topOfObj && 
    topOfBall <= bottomOfObj &&
    ball.position.x   >= leftOfObj  &&
    ball.position.x  + ball.size <= rightOfObj
 ){
    return true;
}else{
    return false;
}
} 