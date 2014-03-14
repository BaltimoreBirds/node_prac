var fs = require('fs');


var fileCharArray = [];
var pathBufferObject = [];


pathBufferObject = process.argv;

fs.readFile(pathBufferObject[2], 'utf8', function callback (err, data){

	if (err){
		throw err;
	} else{
		fileCharArray = data.split('\n');
		console.log(fileCharArray.length - 1 );
	}
});


