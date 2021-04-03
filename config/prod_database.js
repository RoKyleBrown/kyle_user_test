const { Sequelize } = require('sequelize');
const { Client } = require('pg');

// module.exports = new Sequelize(`${process.env.Database}`, `${process.env.User}`, 
//     `${process.env.Password}`, {
//         host: `${process.env.Host}`,
//     dialect: 'postgres'
// });

// module.exports = new Sequelize('postgres://robertkbrown:@localhost:5432/kyle_technical_test') 

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();
debugger;
module.exports = new Sequelize(`${process.env.Database}`, `${process.env.User}`, 
    `${process.env.Password}`, {
        host: `${process.env.Host}`,
    dialect: 'postgres'
});