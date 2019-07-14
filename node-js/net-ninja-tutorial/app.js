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