var http = require('http');
const BufferList = require('bl');

var pathBufferObject = [];
var bl = new BufferList();

pathBufferObject = process.argv;

http.get(pathBufferObject[2], function(response){
	bl.pipe(response.toString());
	console.log(bl);
	// response.on("end", function(data){
	// 	return bl;
	// })
	// bl.pipe(BufferList(function(err,data){
	// 	data.toString();
	// }))
})