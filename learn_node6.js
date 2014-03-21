var http = require('http');

pathBufferObject = process.argv;

http.get(pathBufferObject[2], function(response){        //response is a node STREAM object. "Stream" objects emit events. 

});