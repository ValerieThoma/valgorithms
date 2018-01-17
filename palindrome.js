function palindrome(str){   //array has a built in method of reverse! Let's make our string an array! 
	
	        // replaced line 4 - 6 with line 9 by 'chaining' methods
	// var str2 = str.split('');  //split method splits a string into an array of strings
	// str2.reverse(); //using the reverse method on the array
	// str2 = str2.join(''); //using join method, now 'str2' is an exact reverse of 'str'
	
	        // chaining methods from above
	var str2 = str.split('').reverse().join('');
	
	     // replace this if else statement (12-16) with with one return statement on line 17 
	// if(str === str2){
	// 	return true;
	// }else{
	// 	return false;
	// }
	return str === str2; // replace who if statement with this return statment. <3
};


console.log(palindrome('racecar'));

//   ?? QUESTIONS TO ASK ???
//  Should I check for case? =  str.toLowerCase();
//  Should this function to allow for spaces: ie "evil olive" ;-) ?  I can use a regular expression!!!
//  What if there are numbers and unique characters?  



 