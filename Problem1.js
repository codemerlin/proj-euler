var Enumerable = require('linq');

//Enumerable.Range(1,999).Where(function(i) { return ((i%3 === 0) || (i%5===0)) }).WriteLine();

var val=Enumerable.Range(1,999).Where(function(i) { return ((i%3 === 0) || (i%5===0)) }).Sum();

console.log(val);
