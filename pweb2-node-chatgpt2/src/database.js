const Sequelize = require('sequelize');

const sequelize = new Sequelize('ana', 'aluno', 'aluno', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
