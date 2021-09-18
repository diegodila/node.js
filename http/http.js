var http = require("http"); //ja vem no node(puxa do nucleo)

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1><br><h4>www.foo.com.br</h4>");
}).listen(8181);

console.log("Meu servidor esta rodando");