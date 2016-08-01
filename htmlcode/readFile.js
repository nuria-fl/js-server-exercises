var fs = require('fs');

var link = fs.readFileSync('link.txt', 'utf8', function(err, data){
	return data;
});

module.exports = link;