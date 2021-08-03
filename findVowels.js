let findVowels = (string, vowels = ["a", "e", "i", "o", "u"]) => {
	return string.split('').filter(letter => vowels.includes(letter)).length
}
console.log(findVowels('hello'))
console.log(findVowels('why'))
