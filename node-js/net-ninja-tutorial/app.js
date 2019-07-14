//---------------------//
//#14 - Creating a read stream//
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









/* var server = http.createServer((req, res)=>{
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000'); */