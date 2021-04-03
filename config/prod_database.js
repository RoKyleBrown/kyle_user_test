const { Sequelize } = require('sequelize');
require('dotenv').config();

// module.exports = new Sequelize(`${process.env.Database}`, `${process.env.User}`, 
//     `${process.env.Password}`, {
//         host: `${process.env.Host}`,
//     dialect: 'postgres'
// });

// module.exports = new Sequelize('postgres://robertkbrown:@localhost:5432/kyle_technical_test') 

console.log(`${process.env.DB_DATABASE}`);
console.log(`${process.env.DB_USERNAME}`);
console.log(`${process.env.DB_HOST}`);

module.exports = new Sequelize(`${process.env.DB_DATABASE}`, `${process.env.DB_USERNAME}`, 
    `${process.env.DB_PASSWORD}`, {
        host: `${process.env.DB_HOST}`,
    dialect: 'postgres'
});