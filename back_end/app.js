const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const user = require('./user.js');
var port = process.env.PORT || 3000; //
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/user', user);
app.get('/', (req, res) => res.send('React!!!!!!!!!!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
