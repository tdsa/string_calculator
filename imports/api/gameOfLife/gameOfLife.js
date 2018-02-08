const GameOfLife = {};
GameOfLife.variable = 0;
GameOfLife.functionName = function(equation){
  this.variable = 1;
  console.log(this.variable + " - this is the variable value");
  
};

export default GameOfLife;