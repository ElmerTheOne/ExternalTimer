var express = require('express');
var app = express();
var http = require('http');
var http2 = http.Server(app);
var io = require('socket.io')(http2);
console.log("waiting");
var sock;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
http2.listen(3000, function() {
	console.log("also listening on *:3000");
});

io.on('connection', function(socket){
  console.log("emitting");
  sock = socket;
});
http.createServer(function (req, res) {
  if(sock!= null) {
    sock.emit("test","test");
  }

}).listen(8080); //the server object listens on port 8080
