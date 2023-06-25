const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Alugueis = require('alugueisModel');

const Carros = db.define('Carros',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        unique: false
    },
    ano: {
        type: DataTypes.DATEONLY
    },
    cor: {
        type: DataTypes.STRING
    },
    preço:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    tableName:'carros'
});

Carros.hasMany(Alugueis, {as: 'alugueis',foreignKey:'carro_id'});
Alugueis.belongsTo(Carro, {
    as: 'carro',
    foreignKey: 'carro_id'
});


module.exports = Carros;