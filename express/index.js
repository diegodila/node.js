const express = require("express"); //importando o express 
const app = express(); // iniciando o express

app.get("/", function(req, res){
    res.send("Hello world");
    // res.send("other") pode enviar um resposta uma unica vez 
    // nao podemos deixar de enviar alguma coisa na rota 
});
app.get("/blog/:article?", function(req,res){
    // res.send("<h1>Welcome to my blog</h1>")
    var article = req.params.article
    if(article) {
        res.send("<h2>Article: "+article+"</h2>")
    }else{
        re.send("<h2>Welcome to my blog</h2>")
    }
})

app.get("/channel/youtube", function(req,res){
    res.send(" Welcome to my channel")
})

app.get("/hello/:name/:company",function(req,res){
    //Req sao o dados enviado pelo usuario
    //Res sao a resposta que serão enviada para o usuario 
    var name = req.params.name;
    var company = req.params.company
    res.send("<h1>Hello "+name+" da "+company+"</h1>")
})

app.listen(4000,function(error){
    if(error){
        console.log("Ocorreu um erro!");
    }
    else{
        console.log("Servidor iniciado com sucesso!")
    }
})
