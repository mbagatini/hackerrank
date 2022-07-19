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
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
	// Write your code here

	/**
	 * percorre a matriz em quadrantes
	 * m[i][j] ⇌ m[i][(2n - 1) - j] ⇌ m[(2n - 1) - i][j] ⇌ m[(2n - 1) - i][(2n - 1) - j]
	 * 0 3  0 3
	 * 1 2  1 2
	 * 0 3  0 3
	 * 1 2  1 2
	 */

	var mid = (matrix.length / 2);
	var maxSum = 0;

	for (let i = 0; i < mid; i++) {
		// quadrante
		for (let j = 0; j < mid; j++) {
			// inner quadrante
			var numbers = [
				matrix[i][j],
				matrix[i][(2 * mid - 1) - j],
				matrix[(2 * mid - 1) - i][j],
				matrix[(2 * mid - 1) - i][(2 * mid - 1) - j]
			];

			// console.log(i, j, numbers);

			const max = Math.max(...numbers);
			maxSum += max;
		}

	}
	return maxSum;
}

function main() {
	// const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const q = 1; // parseInt(readLine().trim(), 10);

	for (let qItr = 0; qItr < q; qItr++) {
		// const n = parseInt(readLine().trim(), 10);

		// let matrix = Array(2 * n);
		let matrix = [
			[112, 42, 83, 119],
			[56, 125, 56, 49],
			[15, 78, 101, 43],
			[62, 98, 114, 108]
		];

		// for (let i = 0; i < 2 * n; i++) {
		// 	matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
		// }

		const result = flippingMatrix(matrix);

		console.log(result);

		// ws.write(result + '\n');
	}

	// ws.end();
}

main();
