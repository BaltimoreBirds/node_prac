var fs = require('fs');


var fileCharArray = [];
var pathBufferObject = [];


pathBufferObject = process.argv;

fs.readdir(pathBufferObject[2], function callback (err, data){

	if (err){
		throw err;
	} else{
		for( var i = 0; i< data.length; i++ ){
			if (pathBufferObject[3] == data[i].split('.').pop() && (data[i].split('.').length == 2)){
				console.log(data[i]);
			}
		}
	}
});