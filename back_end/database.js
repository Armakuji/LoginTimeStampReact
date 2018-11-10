var express = require('express');
var app = express.Router();

// moogose
const mongoose = require('mongoose');
let dbUrl = 'mongodb://Armakuji:arm0853910817@ds255463.mlab.com:55463/register';
let UserSchema = mongoose.Schema({
    userName: String,
    password: String,
  });


mongoose.connect(dbUrl);
let db = mongoose.connection
let user = mongoose.model('user', UserSchema);
// let time = mongoose.model('check',checkSchema);
var d = new Date()

app.get('/',(req,res) => {
    res.send("Hello world")
})

app.post('/Register',(req,res) => {
        
                let insert1 = new user({
                    userName: req.body.userName,
                    password: req.body.password
				});
                user.insertMany(insert1).then(() =>{

				})
				
				return res.status(200).json({
                    message: "Ok",
                    success: true
                });

})

app.post('/login',(req,res) => {
    user.find({ userName: req.body.userName,password: req.body.password}).exec().then(doc =>{
        if (doc.length <1 ){
            return res.status(409).json({
                message: "Wrong",
                success: false
            }); 
        }else{
            // console.log(d)
            // let insert2 = new time({
            //     email: req.body.userName,
            //     time: d
            // });
            // time.insertMany(insert2).then(() => {

            // })
            return res.status(200).json({
                message: req.body.email,
                success: true
            });
        }
    })
})



module.exports = app;