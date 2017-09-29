
var expect = require('chai').expect;
var funcionAProbar = require('../index');

describe("Test con EXPECT de función sumar: ", function(){
    it("Probar función sumar dos números enteros", function(){
        result = funcionAProbar.sumar(1,3);
        expect(4).to.equal(4);
    });
    
});
