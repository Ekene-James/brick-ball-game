import Brick from './bricks.js';
export const level1 = [
  // [0, 1, 1, 0, 0, 1, 0, 1, 1, 0,1,1,0,1,1]
   [0,1]
   

]
export const level2 = [
  [0, 1, 1, 0, 0, 1, 0, 1, 1, 0,1,1,0,1,1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1]
  

 
]
export const level3 = [
  [0, 1, 1, 0, 0, 1, 0, 1, 1, 0,1,1,0,1,1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1,1,1,1,1,1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1,1,1,1,1,1],
  [1, 1, 0, 1, 1, 0, 1, 0, 1, 1,0,1,0,1,1],
  

  
]
export const level4 = [
  
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1,1,1,1,1,1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1,1,1,1,1,1],
  [1, 1, 0, 1, 1, 0, 1, 0, 1, 1,0,1,0,1,1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1,1,1,0,1,1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1,1,1,0,1,1],

  
]
export const level5 = [
  [0, 1, 1, 0, 0, 1, 0, 1, 1, 0,1,1,0,1,1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1,1,1,1,1,1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1,1,1,1,1,1],
  [1, 1, 0, 1, 1, 0, 1, 0, 1, 1,0,1,0,1,1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1,1,1,0,1,1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1,1,1,0,1,1],

  
]
export const level6 = [
  [0, 1, 1, 0, 0, 1, 0, 1, 1, 0,1,1,0,1,1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1,1,1,1,1,1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1,1,1,1,1,1],
  [1, 1, 0, 1, 1, 0, 1, 0, 1, 1,0,1,0,1,1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1,1,1,0,1,1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1,1,1,0,1,1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,0,1,1],

  
]
//loop through level array,if the item looped===1, return another array containing Brick classes and position relative to the index of that particular
//item in the loop so that the brick draw class will be called with this new position;
export function buildBricks(game, level){
    let brick=[]
    level?.forEach((row, rowIndex) => {
        row?.forEach((col, colIndex) => {
            if(col === 1){
                const position = {
                    x : 54 * colIndex,
                    y : 60 + 25 * rowIndex
                }
                brick.push(new Brick(game, position))
            }
        })
    })
return brick;
}