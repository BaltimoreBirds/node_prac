var fs = require('fs');




module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function (err, data){

		if (err){
			return callback(err);
		} else{

			matchingExtensions = [];

			for( var i = 0; i< data.length; i++ ){
				if (ext == data[i].split('.').pop() && (data[i].split('.').length == 2)){
					 matchingExtensions.push(data[i]);
				}
			}
			callback(null, matchingExtensions);
		}
	});
}



// ---------------------------------- Official Solution --------------------------------------------

//     var fs = require('fs')
//     var path = require('path')

//     module.exports = function (dir, filterStr, callback) {

//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }