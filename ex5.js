var fs = require('fs');
var destFile = process.argv[2];
var txt = process.argv[3];

fs.writeFile(destFile, txt, function(err){
	if (err) throw err;
	console.log('The file was saved!')
	fs.readFile(destFile, 'utf8', function(err, data){
		console.log(data)
	})
})