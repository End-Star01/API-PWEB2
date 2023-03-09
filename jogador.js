const { Model, DataTypes} = require('sequelize');
const sequelize = require('./database');

const Jogador = sequelize.define('Jogador', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    sequelize,
    tableName: 'jogador',timestamps: false,
});

module.exports = Jogador