var fs = require('fs');




module.exports = function(args) {
	fs.readdir(args[2], function callback (err, data){

		if (err){
			throw err;
		} else{
			for( var i = 0; i< data.length; i++ ){
				if (args[3] == data[i].split('.').pop() && (data[i].split('.').length == 2)){
					console.log(data[i]);
				}
			}
		}
	});
}