var request = require('request');
var link = require('./readFile.js');

request(link, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body)
	}
})