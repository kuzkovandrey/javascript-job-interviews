let palindrome = text => text.toLowerCase() === text.toLowerCase().split('').reverse().join('');

console.log(palindrome('racecar'))
console.log(palindrome('Racecar'))
console.log(palindrome('table'))
