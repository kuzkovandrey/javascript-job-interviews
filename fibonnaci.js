//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584

let fibonnaci = index => {
	let arrayFibonnaci = [0, 1];

	if(arrayFibonnaci[index] || arrayFibonnaci[index] === 0) {
		return index;
	}

	for(let i = arrayFibonnaci.length; i < index; i++) {
		arrayFibonnaci.push(arrayFibonnaci[i - 1] + arrayFibonnaci[i - 2]);
	}

	return arrayFibonnaci[index - 1];
}

//console.log(fibonnaci(0))
//console.log(fibonnaci(4))
//console.log(fibonnaci(7))
