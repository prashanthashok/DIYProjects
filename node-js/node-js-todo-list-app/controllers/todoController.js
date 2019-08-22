var bodyParser = require('body-parser');

var data = [{item: 'Get Milk'}, {item: 'Clean house'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

app.get('/todo', function(req, res){
    res.render('todo', {todos: data})
});    

app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
});

app.delete('/todo', function(req, res){

});

}