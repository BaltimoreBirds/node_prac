var fs = require('fs');




module.exports = function(dir, ext) {
	fs.readdir(dir, function callback (err, data){

		if (err){
			throw err;
		} else{
			for( var i = 0; i< data.length; i++ ){
				if (ext == data[i].split('.').pop() && (data[i].split('.').length == 2)){
					console.log(data[i]);
				}
			}
		}
	});
}