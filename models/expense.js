const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    descreption:{
        type:Sequelize.STRING,
        allowNull:false
    },
    catagery:{
        type:Sequelize.STRING,
        allowNull:false
    }

})
module.exports=expense;