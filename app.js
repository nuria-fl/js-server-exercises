var http = require('http');

http.createServer(function (request, response) {
    response.end("this is the response");
}).listen(process.env['PORT'], function() {
	console.log("Success, I'm listening on port " + process.env['PORT'])
})
