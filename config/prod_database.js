const { Sequelize } = require('sequelize');
const pg = require('pg');
pg.defaults.ssl = true;


module.exports = new Sequelize(`${process.env.DATABASE_URL}`);