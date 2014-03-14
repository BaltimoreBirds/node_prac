var fs = require('fs');


var fileCharArray = [];
var pathBufferObject = [];

function callback (error, data){

}


pathBufferObject = process.argv;

var bufferObject = (fs.readFile(pathBufferObject[2])).toString();

fileCharArray = bufferObject.split('\n');

console.log(fileCharArray.length - 1 );

