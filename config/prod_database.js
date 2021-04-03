const { Sequelize } = require('sequelize');

module.exports = new Sequelize(`${process.env.Database}`, `${process.env.User}`, 
    `${process.env.Password}`, {
        host: `${process.env.Host}`,
    dialect: 'postgres'
});