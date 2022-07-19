'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
	// Write your code here
	var matrix = [];

	// order alphabetically
	for (var i = 0; i < grid.length; i++) {
		var chars = grid[i].split('');
		chars = chars.sort();
		matrix.push(chars);
	}

	// check cols
	for (var col = 0; col < matrix[0].length; col++) {
		var colArr = [];

		for (var row = 0; row < matrix.length; row++) {
			colArr.push(matrix[row][col]);
		}

		// is ordered
		var isOrdered = true;

		if (colArr.length > 1) {
			isOrdered = colArr.every((curr, idx, array) => {
				if (idx < array.length - 1) {
					return curr <= array[idx + 1];
				}

				return curr >= array[idx - 1];
			});
		}

		if (!isOrdered) {
			return 'NO';
		}
	}

	return 'YES';
}

/**
3
3
ppp
ypp
wyw
5
lyivr
jgfew
uweor
qxwyr
uikjd
1
l
 */

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const t = parseInt(readLine().trim(), 10);

	for (let tItr = 0; tItr < t; tItr++) {
		const n = parseInt(readLine().trim(), 10);

		let grid = [];

		for (let i = 0; i < n; i++) {
			const gridItem = readLine();
			grid.push(gridItem);
		}

		const result = gridChallenge(grid);

		ws.write(result + '\n');
	}

	ws.end();
}
