var fs = require('fs');
var destFile = process.argv[2];
var txt = process.argv[3];

fs.writeFile(destFile, txt)