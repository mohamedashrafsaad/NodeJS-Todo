var todoController = require('./controllers/todoController');
var express = require('express');

var app = express();

app.set('view engine' , 'ejs');    //template engine

app.use(express.static('./public'));   //static files
var cors = require('cors');

app.options('*', cors())
app.post('*', cors())
app.delete('*', cors())




todoController(app);     //call controller

app.listen(3000);     //listen to port
console.log("you are listening to port 3000");