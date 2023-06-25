const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('carro', 'carro', 'carro', {
    dialect: 'mysql', host: 'localhost'
});


module.exports = dbSequelize;