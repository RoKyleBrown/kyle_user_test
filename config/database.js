if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod_database');
} else {
    module.exports = require('./dev_database');
}

// const { Sequelize } = require('sequelize');

// module.exports = new Sequelize('postgres://robertkbrown:@localhost:5432/kyle_technical_test') 