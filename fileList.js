var fs = require('fs');

var dirArr = fs.readdirSync('./');
var fileList = '';
dirArr.forEach(function(elem){
	if( fs.lstatSync(elem).isDirectory() ){
		fileList += 'DIR: '
	} else {
		fileList += 'FILE: '
	}
	fileList += elem+'\n';
})
console.log(fileList);