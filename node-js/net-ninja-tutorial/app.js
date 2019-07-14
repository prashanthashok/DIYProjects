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


console.log('test');
