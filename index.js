const express = require('express');
const bodyparser = require('body-parser');
const consolidate = require('consolidate');
const db = require('./database');
const Comment = require('./models').Comment;

const router = express.Router();

const app = express();
app.engine('html', consolidate.nunjucks);
app.set('views', './views');

app.use(bodyparser.urlencoded());
app.use('/static', express.static('./static'));


app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/about', function(req, res){
	res.render('about.html');
});

app.get('/contact', function(req, res){
	res.render('contact.html');
});

app.post('/comment', function(req, res){
	const message = req.body.message;	
	const name = req.body.name;

	console.log(message, name);

	// const query = "INSERT INTO comment (body) VALUES ('"+ comment + "')";

	db.transaction(function(transaction){
		return Comment.create({
			name: name,
			message: message
		}, {transaction: transaction}
		).then(function(){
			return res.redirect('/');
		});
	})
});

app.listen(3000, function() {
	console.log('Server running at port 3000')
});