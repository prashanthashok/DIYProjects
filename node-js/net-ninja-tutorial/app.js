//---------------------//
//#24-25 - Express - Templating Engines//
//---------------------//

var express = require('express');
var app = express();

app.set('view engine', 'ejs'); //whenever a view is requested, it looks into /views folder

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


app.get('/profile/:name', (req, res) => {
    var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'coding']};
    res.render('profile', {person: req.params.name, data: data}); //2nd argument is the data we want to inject into the view
})

app.listen(3000);