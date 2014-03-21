var readAndFilter = require('./learn_node5_module.js')

var fileCharArray = [];
var pathBufferObject = [];


pathBufferObject = process.argv;

readAndFilter(pathBufferObject[2],pathBufferObject[3], function(err, list){

	if (err){
		throw err;
	} else{
		for( var i = 0; i< list.length; i++ ){
			console.log(list[i]);
		}
	}

});
// ------------------------------------- Official Solution---------------------------------------------


    // var filterFn = require('./solution_filter.js')
    // var dir = process.argv[2]
    // var filterStr = process.argv[3]

    // filterFn(dir, filterStr, function (err, list) {
    //   if (err)
    //     return console.error('There was an error:', err)

    //   list.forEach(function (file) {
    //     console.log(file)
    //   })
    // })