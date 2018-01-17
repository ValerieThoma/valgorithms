

function count(str){
	var str = str.toLowerCase(); //set every character in my string to lowercase (unless checking for case)
	var container = {}; //using an object instead of an arrary or a count
	str = str.replace(/[^a-zA-Z]/ig,''); //using a regex to remove/replace numbers or unknown characters to an empty string
	for(i = 0; i < str.length; i++){ //looping through the array
		// if(container[str[i]]){  //checking to see if the character is in the container
		// 	container[str[i]] = container[str[i]] + 1; //if it is, add 1
		// }else{
		// 	container[str[i]] = 1; //if it is not, assign it to one and continue to loop through
		// }
		container[str[i]] = container[str[i]] ? ++ container[str[i]] : 1;
		// ^^ Just learned another way write this---with a ternary operator!  written as: condition ? expr1 : expr2
	}return container; //return the container while still in the function

};

console.log(count("926-valerie-1722")); //call the function