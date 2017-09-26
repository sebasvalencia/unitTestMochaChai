//Importamos chai y el archivo que tiene la funcion a probar
var assert = require('chai').assert;
var funcionAProbar = require('../index');

//Se usa para definir bloques de pruebas relacionadas entre sí
describe("Test con ASSERT interface de CHAI: ", function() {
    describe("Testear la función holaMundo", function(){
        //cada it es una prueba, Las pruebas pueden estar divididas entre varios elementos
        //de tipo “describe”. Esto es útil si queremos diferenciar varios bloques 
        //de pruebas en un mismo fichero.
        it("Probar la respuesta con assert.equal(value, 'value')", function(){
            result = funcionAProbar.holaMundo("Hola");
            assert.equal(result, "Hola Mundo");
        });
        it("Probar que la respuesta sea una cadena", function(){
            result = funcionAProbar.holaMundo("Hola");
            assert.typeOf(result, 'string');
        });

    });
});

describe("Test con ASSERT de función sumar", function(){   
        it("Probar función sumar dos numeros enteros", function(){
            result = funcionAProbar.sumar(1,2);
            assert.equal(result, 3);
        });
        it("Probar función sumar dos numeros negativos", function(){
            result = funcionAProbar.sumar(-1,-2);
            assert.equal(result,-3);
        });
        it("Probar función sumar dos numeros decimales", function(){
            result = funcionAProbar.sumar(1.5,1.5);
            assert.equal(result, 3);
        });        
});


