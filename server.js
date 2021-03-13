const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');


mongoose.connect('mongodb://localhost:27017/animal',{
    
    useUnifiedTopology : true,
    useNewUrlParser:true,
    useFindAndModify:false,
    
}, function(err){
    if(err){
        console.log('Conexão com o BD Falhou');
    }
    else{
        console.log("BD Conectado com Sucesso");
    }
})

 

const app = express();
const port = process.env.PORT || 3333;

app.use(cors()); //Informa quais domínios estarão utilizando a API
app.use(cookieParser());
app.use(express.json()); //Enviar e Receber dados no formato JSON
app.use(routes);


app.listen(port,function(){

    console.log('Server na Porta ${port}');
})

