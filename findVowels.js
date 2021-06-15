let findVowels = (string = '') => {
	let reference = ["a", "e", "i", "o", "u"];

	let vowels = string.split('').filter(item => {
		for(let ref of reference) {
			if (ref === item) return true;
		}
	})

	console.log(vowels.length)
}

//findVowels('hello')
//findVowels('why')
