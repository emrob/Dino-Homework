var Dino = function(type, offspring){
  this.type = type;
  this.offspring = offspring;
}

Dino.prototype.NumKidsPerYear = function (numYears){
 this.total = numYears * this.offspring;
 return this.total;
}



module.exports = Dino;
