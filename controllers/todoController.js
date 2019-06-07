// var bodyparser = require('body-parser');
// var mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://mohamed:1234@cluster0-jtx9u.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

// var todoSchema = new mongoose.Schema({
//     item: String ,
//     complete: Boolean
// });

// var Todo = mongoose.model('Todo',todoSchema);
// var urlencodedparser = bodyparser.json();
module.exports = function (app) {
    
    app.get('/', function (req,res) {
        
        res.send('ok')
        // res.header("Access-Control-Allow-Origin", "*");
        // Todo.find({},function (err,data) {
        //     if(err) throw err;
        //     res.send( {todos: data});
            
        
        
    // });
    // app.post('/', urlencodedparser, function (req,res) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     var newTodo = Todo(req.body).save(function(err){

    //         if(err) throw err;
    //         res.redirect(req.originalUrl)
    //     });
    // });


    // app.delete('/:item', function (req,res) {
    //         console.log(req.params.item)
    //     Todo.findOneAndDelete(({"_id":req.params.item}), (err, todo) => {
    //         // As always, handle any potential errors:
    //         if (err) return res.status(500).send(err);
    //         // We'll create a simple object to send back with a message and the id of the document that was removed
    //         // You can really do this however you want, though.
    //         const response = {
    //             message: "Todo successfully deleted",
    //             item: req.params.item
    //         };
    //         return res.status(200).send(response);
    //     });
    });
        // console.log(req.params.item)
        // res.header("Access-Control-Allow-Origin", "*");
        // Todo.findOneAndRemove({"item":req.params.item.replace(/\-/g,)})},function(err,data){
        //     console.log(data)
        //     if(err) throw err;  
        //     res.json(data);
        // });
}