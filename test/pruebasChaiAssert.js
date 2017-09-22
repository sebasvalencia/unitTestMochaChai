//Importamos chai y el archivo que tiene la funcion a probar
var assert = require('chai').assert;
var funcionAProbar = require('../index');

//Se usa para definir bloques de pruebas relacionadas entre sí
describe("Test con ASSERT interface de CHAI: ", function() {
    describe("Testear la función pruebaSumar", function(){
        //cada it es una prueba, Las pruebas pueden estar divididas entre varios elementos
        //de tipo “describe”. Esto es útil si queremos diferenciar varios bloques 
        //de pruebas en un mismo fichero.
        it("Probar la respuesta con assert.equal(value, 'value')", function(){
            result = funcionAProbar.pruebaConcatenar("texto de ");
            assert(result, "texto de prueba");
        });
    });
});


