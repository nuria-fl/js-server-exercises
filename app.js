var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (request, response) {
    response.end("this is the response");
}).listen(port, function() {
	console.log("Success, I'm listening on port " + port )
})
