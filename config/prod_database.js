const { Sequelize } = require('sequelize');
const pg = require('pg');
pg.defaults.ssl.require = true;
pg.defaults.ssl.rejectUnauthorized = false;


module.exports = new Sequelize(`${process.env.DATABASE_URL}`);