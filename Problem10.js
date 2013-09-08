var nthprimaryNumber = 6

var generatePrimary = function(maxPrimeNumber) {
	primes = [];
    var totalSum=2;
	primes.push(2);
	var curTest = 3;
	
	while (1) {
		var sqrt =  Math.sqrt(curTest);
		var isPrime = true;
		for (var i = 0; i < primes.length && primes[i] <= sqrt; ++i) {
			if (curTest % primes[i] === 0) {
				isPrime = false;
				break;
			}
		}
		if(isPrime) 
			{
				if(curTest>=maxPrimeNumber)
					break;

				totalSum+=curTest
				primes.push(curTest)
			};
		curTest +=2;
	}
	return totalSum;

}

console.log(generatePrimary(10));
console.log(generatePrimary(2000000));