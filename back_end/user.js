var express = require('express');
var router = express.Router();

const f = require('util').format;

const user = encodeURIComponent('Armakuji'); // 
const password = encodeURIComponent('arm0853910817'); //
var dbName = "register" // 

var MongoClient = require('mongodb').MongoClient;
// moogose 
const dbUrl = f("mongodb://%s:%s@ds255463.mlab.com:55463/%s", user, password, dbName);

var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
    MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('user').find({}).toArray(function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send(result);
		});
	});
});

router.post('/', function (req, res) {
	MongoClient.connect(dbUrl, function(err, client) {
		const db = client.db(dbName).collection('user').insertOne(req.body, function (err, result) {
			client.close();
			if (err) res.send(err);
			res.status(200);
			res.send("Insert Success");
		});
	});
})

router.delete('/', function (req, res) {
		
})

router.put('/', function (req, res) {

})

module.exports = router;