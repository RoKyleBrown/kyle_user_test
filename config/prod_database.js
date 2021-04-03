const { Sequelize } = require('sequelize');
const pg = require('pg');
pg.defaults.ssl = true;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


module.exports = new Sequelize(`${process.env.DATABASE_URL}`);