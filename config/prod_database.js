const { Sequelize } = require('sequelize');
require('dotenv').config();

// module.exports = new Sequelize(`${process.env.Database}`, `${process.env.User}`, 
//     `${process.env.Password}`, {
//         host: `${process.env.Host}`,
//     dialect: 'postgres'
// });

// module.exports = new Sequelize('postgres://robertkbrown:@localhost:5432/kyle_technical_test') 


module.exports = new Sequelize(`${process.env.DB_DATABASE}`, `${process.env.DB_USERNAME}`, 
    `${process.env.DB_PASSWORD}`, {
        host: `ec2-54-205-183-19.compute-1.amazonaws.com`,
    dialect: 'postgres'
});