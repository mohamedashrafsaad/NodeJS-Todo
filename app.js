// var todoController = require('./controllers/todoController');
// var express = require('express');

// var app = express();
// //var port = process.env.PORT || 3000;

// app.listen(process.env.PORT, function () {
//     console.log(`Example app listening on port !`);
//    });   //listen to port


// // var cors = require('cors');

// // app.options('*', cors())
// // app.post('*', cors())
// // app.delete('*', cors())




// todoController(app);     //call controller


var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});