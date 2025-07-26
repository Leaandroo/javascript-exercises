const repeatString = function (word, index) {
	let total = "";
	if (index >= 0) {
		for (let i = 0; i < index; i++) {
			total += word;
		}
		return total;
	}
	return "ERROR";
};

console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
