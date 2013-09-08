var Enumerable = require('linq');

var firstDividend=function(numberToworkon,factors) {
	if(numberToworkon===1)
	{
		return;
	}
	for(var i=2; i<= numberToworkon; i++)
	{
		//console.log(i);
		if(numberToworkon%i === 0)
		{
			factors.push(i)
			firstDividend(numberToworkon/i,factors);
			return ;
		}
	}
}

var factors=[];
firstDividend(600851475143,factors)
console.log(factors);