var todoController = require('./controllers/todoController');
var express = require('express');

var app = express();
app.set( 'port', ( process.env.PORT || 5000 ));
app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
    });
app.set('view engine' , 'ejs');    //template engine

app.use(express.static('./public'));   //static files
var cors = require('cors');

app.options('*', cors())
app.post('*', cors())
app.delete('*', cors())




todoController(app);     //call controller

app.get('/', function (req,res) {
    res.redirect('/todo');        
});
console.log("you are listening to port 3000");