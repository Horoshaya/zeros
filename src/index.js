module.exports = function getZerosCount(number) {
	let zeros = 0;
	let numberToSolve = number;

	while(numberToSolve > 0) {
		numberToSolve = Math.floor(numberToSolve/5);
		zeros += numberToSolve;
	}
	return zeros;
} 
