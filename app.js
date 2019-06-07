var todoController = require('./controllers/todoController');
var express = require('express');

var app = express();
const PORT = process.env.PORT||'3000';
app.set('view engine' , 'ejs');    //template engine

app.use(express.static('./public'));   //static files
var cors = require('cors');

app.options('*', cors())
app.post('*', cors())
app.delete('*', cors())




todoController(app);     //call controller

app.listen(PORT);     //listen to port
console.log("you are listening to port 3000");