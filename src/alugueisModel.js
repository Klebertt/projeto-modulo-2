const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Alugueis = db.define('Alugueis',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    carro_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_inicio:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    data_fim: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    valor: {
        type: DataTypes.STRING(100)
    }

    
},{
    tableName:'alugueis'
});


module.exports = Atividade;