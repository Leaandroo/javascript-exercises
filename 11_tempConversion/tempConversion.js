const convertToCelsius = function (degress) {
	let conversion = ((degress - 32) * 5) / 9;

	return +conversion.toFixed(1);
};

const convertToFahrenheit = function (degress) {
	let conversion = degress * (9 / 5) + 32;

	return +conversion.toFixed(1);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
