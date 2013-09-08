var nthprimaryNumber = 6

var generatePrimary = function(nthprimaryNumber) {
	primes = [];

	if (nthprimaryNumber > 0) primes.push(2);
	var curTest = 3;
	while (primes.length < nthprimaryNumber) {
		var sqrt =  Math.sqrt(curTest);
		var isPrime = true;
		for (var i = 0; i < primes.length && primes[i] <= sqrt; ++i) {
			if (curTest % primes[i] === 0) {
				isPrime = false;
				break;
			}
		}
		if(isPrime) primes.push(curTest);
		curTest +=2;
	}
	return primes.pop();

}

console.log(generatePrimary(1));
console.log(generatePrimary(10001));