const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Iniciando a Aplicação
const app = express();
app.use(express.json());
//Iniciando o DB -mongoDB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true
    });
requireDir('./src/models/');


//Recebe todo tipo de requisição-Rotas
app.use('/api', require('./src/routes'));


//Escutando a seguinte porta:
app.listen(3001);
