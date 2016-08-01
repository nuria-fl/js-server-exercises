var fs = require('fs');

var link = fs.readFileSync('link.txt', 'utf8');

module.exports = link;