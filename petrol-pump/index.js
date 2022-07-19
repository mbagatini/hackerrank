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
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps) {
	var initialPoint = null;
	var acc = 0;

	for (let i = 0; i < petrolpumps.length; i++) {
		// check amount vs distance
		if (initialPoint == null) {
			// insuficient petrol
			if (petrolpumps[i][1] > petrolpumps[i][0]) {
				continue;
			}

			initialPoint = i;
			acc = petrolpumps[i][0] - petrolpumps[i][1];
		} else {
			acc = (acc + petrolpumps[i][0]) - petrolpumps[i][1];

			if (acc < 0) {
				//reset
				// console.log("deu ruim");
				i = initialPoint + 1;
				initialPoint = null;
				acc = 0;
			}
		}
	}

	return initialPoint;
}

/**
3
1 5
10 3
3 4
 */
function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	let petrolpumps = Array(n);

	for (let i = 0; i < n; i++) {
		petrolpumps[i] = readLine().replace(/\s+$/g, '').split(' ').map(petrolpumpsTemp => parseInt(petrolpumpsTemp, 10));
	}

	const result = truckTour(petrolpumps);

	ws.write(result + '\n');

	ws.end();
}
