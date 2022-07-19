'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
	// Write your code here

	// 1 2 5 3 7 8 6 4
	// 0 1 2 3 4 5 6 7
	// ---------------
	// 0 0 2 0 2 2 1 0 

	var cont = 0;
	var last = q[q.length - 1];

	// rigth to left
	for (let i = q.length - 2; i >= 0; i--) {
		if (q[i] > i + 3) {
			console.log("Too chaotic");
			return;
		} else if (q[i] == i + 3) {
			// console.log("+2 ",q[i])
			cont += 2;
		} else if (q[i] > last) {
			// console.log("+1 ", q[i])
			cont++;
		} else {
			last = q[i];
		}
	}

	console.log(cont);

	/**
	 * 
		709
		Too chaotic
		704
		Too chaotic
		Too chaotic
		Too chaotic
		691
		731
		733
		Too chaotic
	 */
}

function main() {
	const t = 1; //parseInt(readLine().trim(), 10);

	for (let tItr = 0; tItr < t; tItr++) {
		const n = 8; // parseInt(readLine().trim(), 10);

		const q = [1, 2, 5, 3, 7, 8, 6, 4]; // readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

		minimumBribes(q);
	}
}

main();