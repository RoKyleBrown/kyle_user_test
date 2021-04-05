const Sequelize = require("sequelize");
const db = require ('../config/database');

const User = db.define('user', {
    // Model attributes 
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    full_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cell_phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    zip_code: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    photos: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = User;