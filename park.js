var Park = function(){
  this.enclosure = [];
}


Park.prototype.addDino = function (dino) {
  this.enclosure.push(dino);
};


Park.prototype.removeDino = function(type) {
  for (var dino of this.enclosure) {
    if (dino.type === type) {
      var index = this.enclosure.indexOf(dino);
      this.enclosure.splice(index, 1);
    }
  }
}

Park.prototype.moreThanTwoOffspring = function(dino) {
var total = [];
  for (var dino of this.enclosure) {
    if (dino.offspring > 2) {
      total.push(dino);
    }

  }
  return total;
}


module.exports = Park;
