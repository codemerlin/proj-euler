var Enumerable = require('linq');

var fibSeries = function(i,j,addToArray)
{
  if(j>4000000)
  {
 	return ;
  }
  else
  {
    var temp=j;
  	j=i+j;
  	i=temp;
   	addToArray.push(j)
  
   }
  fibSeries(i,j,addToArray)

}

var fibSeriesValues = [];
//fibSeriesValues.push(1);
fibSeries(0,1,fibSeriesValues);
fibSeriesValues.pop();
console.log(Enumerable.From(fibSeriesValues).Where("i=>i%2===0").Sum()); 
//var Enumerable = require('linq');

