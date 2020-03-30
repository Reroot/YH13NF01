function FormattedDivision(num1, num2) {
	// code goes here
	var finalnum = num1 / num2;
	var finalnum = Math.round(finalnum * 10000) / 10000;
	return finalnum.toFixed(4);
}

// keep this function call here
console.log(FormattedDivision(readline()));
