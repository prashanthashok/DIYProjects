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

