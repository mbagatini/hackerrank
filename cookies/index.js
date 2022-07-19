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
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookies(k, A) {
	var iterations = 0;
	var cookies = [...A];

	while (true) {
		var min = { pos: -1, value: Number.MAX_SAFE_INTEGER };
		var min2 = { pos: -1, value: Number.MAX_SAFE_INTEGER };

		for (let i = 0; i < cookies.length; i++) {
			if (cookies[i] >= k) {
				if (!(min.pos != -1 && min2.pos == -1)) {
					continue;
				}
			}

			if (cookies[i] < min.value) {
				min2 = { ...min };
				min = { pos: i, value: cookies[i] };
			} else if (cookies[i] < min2.value) {
				min2 = { pos: i, value: cookies[i] };
			}
		}

		if (cookies.length == 1 && cookies[0] < k) return -1;

		if (min.pos == -1 && min2.pos == -1) {
			break;
		}

		if (min.pos < min2.pos) {
			cookies.splice(min.pos, 1);
			cookies.splice(min2.pos - 1, 1);
		} else {
			cookies.splice(min.pos, 1);
			cookies.splice(min2.pos, 1);
		}

		var newCookie = min.value * 1 + (2 * min2.value);
		cookies.push(newCookie);

		iterations++;
	}

	// console.log(cookies, A, k)

	if (cookies.length == A.length) return 0;

	return iterations;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

	const n = parseInt(firstMultipleInput[0], 10);

	const k = parseInt(firstMultipleInput[1], 10);

	const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

	const result = cookies(k, A);

	ws.write(result + '\n');

	ws.end();
}

// console.log(cookies(7, [1, 2, 3, 9, 10, 12, 6]));
// console.log(cookies(10, [1, 1, 1]));
// console.log(cookies(10, [52, 96, 13, 37]));

fs.readFile('./cookies/input.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	var arr = data.split(' ');
	console.log(cookies(615787220, arr));
});