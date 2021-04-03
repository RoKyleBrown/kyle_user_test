const { Sequelize } = require('sequelize');

// module.exports = new Sequelize(`${process.env.Database}`, `${process.env.User}`, 
//     `${process.env.Password}`, {
//         host: `${process.env.Host}`,
//     dialect: 'postgres'
// });

module.exports = new Sequelize('postgres://robertkbrown:@localhost:5432/kyle_technical_test') 