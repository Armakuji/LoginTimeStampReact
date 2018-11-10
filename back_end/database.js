var express = require('express');
var app = express.Router();

const f = require('util').format;

const user = encodeURIComponent('Armakuji'); // 
const password = encodeURIComponent('arm0853910817'); //
var dbName = "register" // 

var MongoClient = require('mongodb').MongoClient;
// moogose 
const dbUrl = f("mongodb://%s:%s@ds255463.mlab.com:55463/%s", user, password, dbName);

var ObjectID = require('mongodb').ObjectID;


app.get('/user', function (req, res) {
    MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('user').find({}).toArray(function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send(result);
		});
	});
});

app.post('/Login', function (req, res) {
    MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('user').find({userName: req.body.userName , password:req.body.password}).toArray(function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send(result);
		});
	});
});

app.post('/Register', function (req, res) {
	MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('user').insertOne(req.body, function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send("Insert Success");
		});
	});
})


module.exports = app;