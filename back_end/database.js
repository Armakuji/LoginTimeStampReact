var express = require('express');
var app = express.Router();

// moogose
const mongoose = require('mongoose');
let dbUrl = 'mongodb://Armakuji:arm0853910817@ds255463.mlab.com:55463/register';
let UserSchema = mongoose.Schema({
    userName: String,
    password: String,
});

let timeSchema = mongoose.Schema({
    userName: String,
    time: String,
});

mongoose.connect(dbUrl);
let db = mongoose.connection
let user = mongoose.model('users', UserSchema);
let time = mongoose.model('time', timeSchema);
var date = new Date()

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.post('/Register', (req, res) => {
    user.find({ userName: req.body.userName }).exec().then(doc => {
        if (doc.length >= 1) {
            return res.status(409).json({
                message: "Wrong",
                success: false
            });
        } else {
            let UserDetail = new user({
                userName: req.body.userName,
                password: req.body.password
            });
            user.insertMany(UserDetail).then(() => {

            })

            return res.status(200).json({
                message: "Ok",
                success: true
            });
        }
    })

    let UserDetail = new user({
        userName: req.body.userName,
        password: req.body.password
    });
    user.insertMany(UserDetail).then(() => {

    })

    return res.status(200).json({
        message: "Ok",
        success: true
    });

})

app.post('/login', (req, res) => {
    user.find({ userName: req.body.userName, password: req.body.password }).exec().then(doc => {
        if (doc.length < 1) {
            return res.status(409).json({
                message: "Wrong",
                success: false
            });
        } else {
            let insertTime = new time({
                userName: req.body.userName,
                time: date
            });
            time.insertMany(insertTime).then(() => {

            })
            return res.status(200).json({
                message: req.body.userName,
                success: true
            });
        }
    })
})

app.post('/facebookLogin', (req, res) => {
    let userFaceBook = new time({
        userName: req.body.email,
        time: date
    });
    time.insertMany(userFaceBook).then(() => {

    })
    return res.status(200).json({
        message: req.body.email,
        success: true
    });
})

app.post('/time', (req, res) => {

    time.find({ userName: req.body.userName }).select("time").then(doc => {
        console.log(doc)

        res.status(200).json({
            user: doc
        })
    })
})


module.exports = app;