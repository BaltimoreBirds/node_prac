var http = require('http');
const BufferList = require('bl');

var pathBufferObject = [];
var bl = new BufferList();

pathBufferObject = process.argv;
var concat_response = [];

http.get(pathBufferObject[2], function(response){
	response.pipe(BufferList(function(err, data){

		if(err){
			throw err;
		}else{
			console.log(data.length);
			console.log(data.toString());

			
		}
	}))
})