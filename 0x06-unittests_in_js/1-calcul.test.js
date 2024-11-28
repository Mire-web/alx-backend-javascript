const calculateNumber = require("./1-calcul");
const assert = require('assert');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should sum positive numbers', function(){
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should sum negative numbers', function(){
      assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
    });
  });

  describe('SUBTRACT', function() {
    it('should subtract positive numbers', function(){
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), 4);
    });
    it('should sum negative numbers', function(){
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), 6);
    });
  });

  describe('DIVIDE', function() {
    it('should divide positive numbers', function(){
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should sum negative numbers', function(){
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 0), 'Error');
    });
  });
});
