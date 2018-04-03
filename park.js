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
  for (var dino of this.enclosure) {
    if (dino.offspring > 2) {
      total.push(dino);
    }

  }
  return total;
}

Park.prototype.totalDinoCount = function() {
  for (var dino of this.enclosure) {
    dino.NumKidsPerYear();

  }
}

// const items = ['item1', 'item2', 'item3'];
// const copy = [];
//
// for (let i=0; i<items.length; i++) {
//   copy.push(items[i])
// }


module.exports = Park;
