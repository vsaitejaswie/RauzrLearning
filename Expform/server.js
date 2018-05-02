const express = require('express');
const app = express();

const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');
var mongoDB = "mongodb://tej:tej@ds111420.mlab.com:11420/kart";
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://tej:tej@ds111420.mlab.com:11420/kart";

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

//var dbo;

app.listen(3000, function() {
  console.log('listening on 3000')
});

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var dbo = mongoose.connection;
dbo.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbo.createCollection('kart', function(err, collection) {});

/*MongoClient.connect(url, function(err, db){
	if(!err)
	{
		dbo = db.db("kart");
		console.log('Database Created!');
		dbo.createCollection('kart', function(err, collection) {});
	}	
});*/

app.get('/', (req, res) => {
  dbo.collection('kart').find().toArray((err, result) => {
    if (err) {return console.log(err);}
    // renders index.ejs
	//console.log(result);
    res.render('index', {kart: result});
  })
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	 dbo.collection('kart').save(req.body, (err, result) => {
	if(!err)
	{
		console.log('saved to database');
    	res.redirect('/');
	}
})
});


