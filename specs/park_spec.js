var assert = require('assert');
var Park = require('../park.js');
var Dino = require('../dino.js');


describe('Park', function(){

  var park;
  var dino;

    beforeEach(function(){
      park = new Park();
      dino1 = new Dino("T-Rex", 1);
      dino2 = new Dino("Stegosaurus", 4);
      dino3 = new Dino("Diplodocus", 3);

    });

  it('enclosure should start empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('should be able to add dinosaur', function(){
    park.addDino(dino1);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it('should be able to remove all dinosaurs of a particular type', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.removeDino('Stegosaurus')
    assert.strictEqual(park.enclosure.length, 1);
  })

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    assert.strictEqual(park.moreThanTwoOffspring.length,2);
})


});
