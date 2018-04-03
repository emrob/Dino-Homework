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

Park.prototype.moreThanTwoOffspring = function() {
  var total = [];
  if (dino.offspring > 2){
    total.addDino(dino)
  }
return total;
}

module.exports = Park;
