var todoController = require('./controllers/todoController');
var express = require('express');

var app = express();
//var port = process.env.PORT || 3000;

app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port !`);
   });   //listen to port


// var cors = require('cors');

// app.options('*', cors())
// app.post('*', cors())
// app.delete('*', cors())




todoController(app);     //call controller


