var Park = function(){
  this.enclosure = [];
}


Park.prototype.addDino = function (dino) {
  this.enclosure.push(dino);
};


Park.prototype.removeDino = function(type) {
  var dinosToKeep = [];
  for (var dino of this.enclosure) {
    if (dino.type === type) {
      var index = this.enclosure.indexOf(dino);
      dinosToKeep.push(this.enclosure.splice(index, 1));
    }
  }
  this.enclosure = dinosToKeep;
}

Park.prototype.moreThanTwoOffspring = function() {
var total = [];
  for (var dino of this.enclosure) {
    if (dino.offspring > 2) {
      total.push(dino);
    }

  }
  return total;
}

Park.prototype.totalDinoCount = function() {
  var total = [];
  for (var dino of this.enclosure) {
    dino.NumKidsPerYear();

  }
}




module.exports = Park;
