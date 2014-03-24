var http = require('http');
const BufferList = require('bl');

var pathBufferObject = [];


pathBufferObject = process.argv;
var list_0 = [];
var list_1 = [];
var list_2 = [];

var counter = 0;



http.get(pathBufferObject[2], function(response){
	response.pipe(BufferList(function(err, data){
			if(err){
				throw err;
			}else{
				response.on("data", function(data){
					console.log(data.toString())
				})
				response.on("end", function(data){
					console.log(data)
				})
			}
		}))
})

http.get(pathBufferObject[3], function(response){
	response.pipe(BufferList(function(err, data){
			if(err){
				throw err;
			}else{
				list_1.push( data.toString());
			}
		}))
})

http.get(pathBufferObject[4], function(response){
	response.pipe(BufferList(function(err, data){
			if(err){
				throw err;
			}else{
				list_2.push( data.toString());
			}
		}))
})

	// console.log(list_2);
