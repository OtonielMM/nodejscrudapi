//importando pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//configurar a aplicação para usar o body-parser
//esta parte pega rota
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Defindo a porta onde o servidor vai respoder

var port = process.env.port || 8000;

//Definindo as rotas
var router = express.Router(); // intercepta todas as rotas -> vai bater aqui primeiro

router.get('/',function(req,res)//
{
    res.json({'message':'ok, rota principal funcionando'});//responder com um json

});

// criar um padrao pra as api // Vincula ao express -- Vinculo da app com o motor de rotas
//definindo uma rota padrao para as minhas apis
app.use('/api',router);

app.listen(port);
console.log("Api up and running! on port"+port);
