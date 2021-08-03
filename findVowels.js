let findVowels = (string, reference = ["a", "e", "i", "o", "u"]) => {
	return string.split('').filter(item => reference.includes(item)).length
}

console.log(findVowels('hello'))
console.log(findVowels('why'))
