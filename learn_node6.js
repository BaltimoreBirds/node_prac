var http = require('http');

var pathBufferObject = [];
var responses = [];

pathBufferObject = process.argv;

http.get(pathBufferObject[2], function(response){        //response is a node STREAM object. "Stream" objects emit events. ≈learnyou
	response.on("data", function(data){
		responses.push(data.toString());
		// console.log(data.setEncoding('utf8'));
	})
	response.on("error", function(data){
		return data;
	})
	response.on("end", function(data){
		for(i = 0; i<responses.length; i++){
			console.log(responses[i]);
		}
	})
});





// --------------------------- Official Solution --------------------------------------

//     var http = require('http')

//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     })
