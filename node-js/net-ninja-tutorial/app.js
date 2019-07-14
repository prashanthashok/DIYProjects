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

