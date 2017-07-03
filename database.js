const Sequelize = require('sequelize');

const conn = 'postgres://webeng:webeng@localhost:5432/webeng-chrmnyg';
const db = new Sequelize(conn);

module.exports = db;
