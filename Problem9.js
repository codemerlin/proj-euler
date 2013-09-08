for(var a=0;a<=1000;a++)
	for(var b=a+1;b<=1000-(a+1);b++)
		for(var c=b+1;c<=1000-(b+1);c++)
		{	
			if(a+b+c>1000)
				continue;
			if(a+b+c<1000)
				continue;
			if( ((a+b+c)==1000) && (a*a)+(b*b)==(c*c))
			{
				console.log(a);
				console.log(b);
				console.log(c);
				console.log(a*b*c)
			}
			else
				continue;
		}
