var assert = require('assert');
var Dino = require('../dino.js');


describe('Dinosaur', function(){

  var dino

    beforeEach(function(){
      dino1 = new Dino("t-rex", 2);
    })

  it('should have a type', function(){
    assert.strictEqual(dino1.type, "t-rex");
  })

  it('should have a number of offspring ', function(){
    assert.strictEqual(dino1.offspring, 2);
  })

  it('number of offspring a dino has per year', function(){
    assert.strictEqual(dino1.NumKidsPerYear(2), 4);
  })

})
