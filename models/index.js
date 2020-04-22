'use strict';

const Sequelize = require('sequelize');
const db = {};
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const config = require('../database/config/database');

db.Sequelize = Sequelize;
db.sequelize = new Sequelize(config);

db.sequelize
    .autheticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach(file => {
        const model = db.sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;