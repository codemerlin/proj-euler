var checkPalin = function(numberToWorkOn) {
	var stringNum = numberToWorkOn.toString();

	if (stringNum.length % 2 !== 0)
		return false;
	else {
		for (var i = 0; i <= stringNum.length / 2; i++) {
			if (stringNum[i] !== stringNum[stringNum.length - 1 - i])
				return false
		}
		return true;
	}
}


var FindMax3DigitNum = function() {
	var finalNum = 0;

	for (var i = 100; i <= 999; i++) {
		for (var j = 100; j <= 999; j++) {

			var numberToWorkOn = i * j;
			if (checkPalin(numberToWorkOn))
				if (finalNum <= numberToWorkOn)
					finalNum = numberToWorkOn;

		}
	}
	return finalNum;
}

console.log(FindMax3DigitNum());