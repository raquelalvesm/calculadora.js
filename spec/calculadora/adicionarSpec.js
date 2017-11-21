describe("Teste de adição", function(){
  var Calculadora = require('../../src/js/calculadora.js');
  it('deve retornar 5 para 2 e 3', function(){
    expect(Calculadora.adicionar(2,3)).toEqual(5);
  });
});
