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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
	var ini = 0;
	var end = s.length - 1;

	var types = {
		parentheses: {
			open: 40,
			close: 41,
		},
		brakets: {
			open: 91,
			close: 93,
		},
		braces: {
			open: 123,
			close: 125,
		},
	}

	var pairs = [];

	var closingTypes = [types.parentheses.close, types.brakets.close, types.braces.close];

	for (let i = 0; i < s.length; i++) {
		var code = s.charCodeAt(i);

		// console.log(code)

		// closing
		if (closingTypes.includes(code)) {
			// check which type
			var isEqual = false;
			var lastPos = pairs.length - 1;

			switch (code) {
				case types.parentheses.close:
					isEqual = pairs[lastPos] == types.parentheses.open;
					break;

				case types.brakets.close:
					isEqual = pairs[lastPos] == types.brakets.open;
					break;

				case types.braces.close:
					isEqual = pairs[lastPos] == types.braces.open;
					break;
			}

			if (isEqual) {
				pairs.pop();
			} else {
				return 'NO';
			}
		} else {
			pairs.push(code);
		}

		// console.log(pairs)
	}

	if (pairs.length > 0) {
		return 'NO';
	}

	return 'YES';
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const t = parseInt(readLine().trim(), 10);

	for (let tItr = 0; tItr < t; tItr++) {
		const s = readLine();

		const result = isBalanced(s);

		ws.write(result + '\n');
	}

	ws.end();
}
