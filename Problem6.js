var Enumerable = require('linq');
var rangeMax= 100;
var collection=Enumerable.Range(1,rangeMax);
var sumofSquares=collection.Select("i=>i*i").Sum();
var numbersTotal=collection.Sum();
//.Select("i=>i*i");
console.log((numbersTotal*numbersTotal)-sumofSquares);