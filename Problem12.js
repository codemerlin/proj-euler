var triangleNum = function(nthNumber) {
	var total = 0;
	for (var j = 1; j <= nthNumber; j++) {
		total += j;
	}
	return total;
};

var calculateFactors = function(inputValue) {
	var factors = [];
	for (var j = 1; j <= inputValue; j++) {
		if (inputValue % j === 0)
			factors.push(j);
	}
	return factors;
}

var start = new Date().getTime();

var i = 0;

while (1) {
	i++;

	var triNum = triangleNum(i);
	//console.log(triNum);
	var factors = calculateFactors(triNum);
	//console.log(factors.length);
	if (factors.length >= 500) {
		console.log(triNum);
		//console.log(factors);
		console.log(factors.length);
		var end = new Date().getTime();
		//console.log(end);
		var time = end - start;
		console.log('Execution time: ' + time);
		break;
		
	}
	/*if (i === 7)
		break;*/

}