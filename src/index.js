module.exports = function getZerosCount(number) {
	var zeros = 0;

	while(number > 0) {
		number = Math.floor(number/5);
		zeros += number;
	}

	return zeros;
}
