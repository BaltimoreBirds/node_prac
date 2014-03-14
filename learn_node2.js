var fs = require('fs');


var fileCharArray = [];

var pathBufferObject = [];

pathBufferObject = process.argv;

var bufferObject = (fs.readFileSync(pathBufferObject[2])).toString();

fileCharArray = bufferObject.split('\n');

console.log(fileCharArray.length - 1 );

