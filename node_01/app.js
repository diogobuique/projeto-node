var calculadora = require("./calculadora");
var http = require("http");

http.createServer(function(requisicao,resposta){

    resposta.end("<h1>Bem vindo ao meu teste do NodeJS!</h1>")

}).listen(8181);




console.log(calculadora.nome);
console.log(calculadora.soma(10,20));
console.log(calculadora.subtracao(50,10));
console.log(calculadora.multiplicacao(10,5));
console.log(calculadora.divisao(600,10));
console.log("Meu servidor está rodando!!! ")





