const calculateNumber = require("./1-calcul");
const expect = require('chai').expect;

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should sum positive numbers', function(){
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should sum negative numbers', function(){
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    });
  });

  describe('SUBTRACT', function() {
    it('should subtract positive numbers', function(){
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(4);
    });
    it('should sum negative numbers', function(){
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(6);
    });
  });

  describe('DIVIDE', function() {
    it('should divide positive numbers', function(){
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should sum negative numbers', function(){
      expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
    });
  });
  it('should sum negative numbers', function(){
	expect(calculateNumber('DIVIDE', 1.4, 4.6)).to.equal(0.2);
  });
});
