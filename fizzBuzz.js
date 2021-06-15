let fizzbuzz = number => {

	for (let iterNumber = 1; iterNumber <= number; iterNumber++) {

		if(iterNumber % 3 === 0 && iterNumber % 5 === 0) {
			console.log('fizzbuzz');
		} else if(iterNumber % 5 === 0) {
			console.log('buzz');
		} else if(iterNumber % 3 === 0) {
			console.log('fizz');
		} else {
			console.log(iterNumber);
		}
	}
}

fizzbuzz(15);
