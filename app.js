const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database')
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const joGadores = require('./joGadoresRouter');

app.use('/jogador', joGadores);

app.listen(3000, () => {

    sequelize.sync({alter: true}).then(() => {
        console.log('Modelo sincronizado com o bd');
    }).catch((error) => {
        console.log('Houve um erro ao sincronizar com o banco:', error);
    });
});