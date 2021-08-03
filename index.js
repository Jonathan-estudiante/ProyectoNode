const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/tienda_db',
    {
        useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
);

//Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitar cors
app.use(cors());

app.use('/', routes());

app.listen(5000, function () {
    console.log('Servidor en ejecución...');
})