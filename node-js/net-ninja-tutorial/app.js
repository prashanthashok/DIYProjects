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