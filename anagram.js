let anagram = (string1, string2) => {

	let temtString1 = string1.toLowerCase().split('').sort().join('');
	let temtString2 = string2.toLowerCase().split('').sort().join('');

	return temtString1 === temtString2;	
};


//console.log(anagram('findeR', 'Friend'));
//console.log(anagram('hello', 'bye'));
