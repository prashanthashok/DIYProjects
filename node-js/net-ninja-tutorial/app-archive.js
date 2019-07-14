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