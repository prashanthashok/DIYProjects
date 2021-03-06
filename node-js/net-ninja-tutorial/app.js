//---------------------//
//#30 - Handling POST requests //
//---------------------//

var express = require('express');
var bodyParser = require('body-parser'); //to handle POST requests
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs'); //whenever a view is requested, it looks into /views folder
// app.use('/assets', (req, res, next)=>{ //next parameter is used to indicate nodejs to go on to the next middleware
//     console.log(req.url);                                        //app,get is the next middleware in this case
//     next();
// }); //to serve Static files

app.use('/assets', express.static('assets')); // in built function to serve Express static file

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', (req, res) => {
    var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'coding']};
    res.render('profile', {person: req.params.name, data: data}); //2nd argument is the data we want to inject into the view
})

app.listen(3000);