const express = require("express"); //importando o express 
const app = express(); // iniciando o express

app.get("/", function(req, res){
    res.send("Hello world");
    // res.send("other") pode enviar um resposta uma unica vez 
    // nao podemos deixar de enviar alguma coisa na rota 
});
app.get("/blog", function(req,res){
    res.send("Welcome to my blog")
})

app.get("/channel/youtube", function(req,res){
    res.send(" Welcome to my channel")
})


app.listen(4000,function(error){
    if(error){
        console.log("Ocorreu um erro!");
    }
    else{
        console.log("Servidor iniciado com sucesso!")
    }
})
