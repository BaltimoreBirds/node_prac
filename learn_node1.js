var argumentArray = [];

argumentArray = process.argv;

if(argumentArray.length >= 3){
	var sum = 0;
	for(var i = 2; i < argumentArray.length; i++){

		var num = Number(argumentArray[i]);
		sum = sum + num;

	}
	console.log(sum);
}else{
	console.log('0');
}
