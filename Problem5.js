var Enumerable = require('linq');

var numberToloop = 20;
var isNumberFound = false;
var i = 1;

while (1) {
	for (var j = 1; j <= numberToloop; j++) {
		if (i % j !== 0) {
			isNumberFound = false;
			break;
		} else {
			isNumberFound = true;
		}
	}
	if(isNumberFound)
	{
		console.log(i);
		break;
	}
	i++;
}