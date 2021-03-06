console.log(__dirname); //global object for dir name
console.log(__filename); //global object for current filename

//var counter = require('./count') //no need to pass .js at the end
                        //this is done on the global object
                        //module.exports returns the counter function to the counter in this file
                        //counter in app.js is a reference to counter in count.js

var stuff = require('./stuff');

//ES6 variant => import { counter, adder, pi } from './stuff';

console.log(stuff.counter(['prash','naruto','ryu'])); //this will throw error as counter is not available outside of count.js
                                                // to fix it, use module.exports

console.log(stuff.adder(1,3));

console.log(`Pi = ${stuff.pi}`);
console.log(stuff.adder(stuff.pi,8));

//---------------------//
//#8 - Events and Utils//
//---------------------//

var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (msg)=>{
    console.log(msg);
});

myEmitter.emit('someEvent', '\'Hello, World!\' event was emitted'); 

var util = require('util');

var Person = function(name) { //ES6 ()=> is throwing error: TypeError: Object.setPrototypeOf called on null or undefined
    this.name = name;
};

 util.inherits(Person, events.EventEmitter);

 var prashanth = new Person('Prashanth');
 var nina = new Person('Nina');
 var fizzy = new Person('fizzy');

 var people = [prashanth, nina, fizzy];

 people.forEach((person)=>{
     person.on('speak', (msg)=>{
        console.log(person.name + ' said: ' + msg);
     });
 });

 prashanth.emit('speak', 'Yo, whaddup!');
 nina.emit('speak', 'R is fun! Yey');
 fizzy.emit('speak', 'buuuuuurp!');

//---------------------//
//#9 - Reading and Writing Files//
//---------------------//

var fs = require('fs'); //convention: generally set variable name the same as the module name

var readMe = fs.readFileSync('readMe.txt', 'utf8'); //This is a synchronous method, it is a blocking code, there is an async version as well
//console.log(readMe);

fs.writeFileSync('writeMe.txt', readMe); //this is also a sync operation

//----- Async version ----//

fs.readFile('readMe.txt', 'utf8', (err, data)=>{
    //console.log(data);
    fs.writeFile('writeMe.txt', data,()=>{console.log('Write completed')}) ; //without callback, it writes the file correctly but throws error
                                                                            // TypeError [ERR_INVALID_CALLBACK]: Callback must be a function
}); //async version, needs a callback function as the 3rd argument

fs.unlink('writeMe.txt', (err) => { //without a callback throws error TypeError [ERR_INVALID_CALLBACK]: Callback must be a function
    if(err) console.log(`Error occurred ${err}`);
    else console.log('File successfully deleted');
});

console.log('test');


//---------------------//
//#10 - Creating and Removing Directories//
//---------------------//

var fs = require('fs');

//Sync methods

//fs.mkdirSync('stuff'); //thorws error if dir does not exist

//fs.rmdirSync('stuff');

//Async methods

// fs.mkdir('stuff', (err) =>{
//     if(err) console.log(`Error occurred ${err}`);
//     else{
//         fs.readFile('readMe.txt', 'utf8', (err, data) =>{
//             if(err) console.log(`Error occurred ${err}`);
//             else{
//                 fs.writeFile('./stuff/WriteMe.txt', data, (err) => {
//                     if(err) console.log(`Error occurred ${err}`);
//                     else{
//                         console.log('File write successful');
//                     }
//                 })
//             }
//         })
//     }
// } );


fs.unlink('./stuff/WriteMe.txt', (err) => {
    if (err) console.log(`Error occurred ${err}`)
    else {
        fs.rmdir('stuff', (err) => { //can't remove a directory without it being empty
            if (err) console.log(`Error occurred ${err}`)
            else console.log('directory removed');
            }
        );
    }
});

console.log('Async test');

//---------------------//
//#12 - Creating a Server//
//---------------------//

var http = require('http');

var server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');

//---------------------//
//#14-15 - Creating read and write stream//
//---------------------//

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //without character encoding, it's going to print the buffer
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', (chunk) => {
    console.log('new chunk recieved');
    myWriteStream.write(chunk, (err) => {
        if(err)console.log(`Error occurred ${err}`);
        else console.log('chunk written to file');
    })
    //console.log(chunk);
});

//---------------------//
//#16 - Pipes//
//---------------------//

var http = require('http');
var fs = require('fs');


//myReadStream.pipe(myWriteStream); //can only be used pipe on readable streams


var server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //without character encoding, it's going to print the buffer
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');

//---------------------//
//#17 - Serve HTML//
//---------------------//

var http = require('http');
var fs = require('fs');


//myReadStream.pipe(myWriteStream); //can only be used pipe on readable streams


var server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); //without character encoding, it's going to print the buffer
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');


//---------------------//
//#18 - Serve JSON//
//---------------------//

var http = require('http');
var fs = require('fs');


//myReadStream.pipe(myWriteStream); //can only be used pipe on readable streams


var server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 28
    };
    res.end(JSON.stringify(myObj)); //expects a string or a buffer, need to serialize myObj

});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');

//---------------------//
//#19 - Basic Routing//
//---------------------//

var http = require('http');
var fs = require('fs');


//myReadStream.pipe(myWriteStream); //can only be used pipe on readable streams


var server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'Fizz', age: '28'}, {name: 'Yoshi', age: 32}];
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
    } else{
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    
    

});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');

//---------------------//
//#23 - Express//
//---------------------//

var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('this is the homepage');
});

app.get('/contact', (req, res) => {
    res.send('this is the contact page');
});


app.listen(3000);

//---------------------//
//#24 - Express - Route Parameters//
//---------------------//

var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('this is the homepage');
});

app.get('/contact', (req, res) => {
    res.send('this is the contact page');
});


app.get('/profile/:id', (req, res) => {
    res.send('You requested to see the profile with id of: ' + req.params.id);
})

app.listen(3000);

//---------------------//
//#24-25 - Express - Templating Engines//
//---------------------//

var express = require('express');
var app = express();

app.set('view engine', 'ejs'); //whenever a view is requested, it looks into /views folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});


app.get('/profile/:name', (req, res) => {
    var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'coding']};
    res.render('profile', {person: req.params.name, data: data}); //2nd argument is the data we want to inject into the view
})

app.listen(3000);

//---------------------//
//#29 - Query strings //
//---------------------//

var express = require('express');
var app = express();

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


app.get('/profile/:name', (req, res) => {
    var data = {age: 28, job: 'ninja', hobbies: ['eating', 'fighting', 'coding']};
    res.render('profile', {person: req.params.name, data: data}); //2nd argument is the data we want to inject into the view
})

app.listen(3000);