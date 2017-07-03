const Sequelize = require('sequelize');
const db = require('./database');

const Comment = db.define('comments', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	message: {
		type: Sequelize.STRING
	}
}, {
	timestamps: true
});


db.sync();
module.exports.Comment = Comment;