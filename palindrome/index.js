'use strict';

const fs = require('fs');

let inputString = '';
let currentLine = 0;

main();


function readLine() {
	return inputString[currentLine++];
}



/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
	// Write your code here abba
	var l = s.length;
	var str = 0;
	var end = l - 1;

	// cross the word until find the difference
	while (str <= end) {
		if (s.charAt(str) != s.charAt(end)) break;

		str += 1;
		end -= 1;
	}

	if (str >= end + 1) return -1;

	// compare the position right after discovering the different position
	// [kaika]
	// babi[7lool]ibab
	// console.log(str, end);
	var a = str + 1;
	var b = end;

	while (a < end && b > str + 1) {
		// console.log(a, b, s.charAt(a), s.charAt(b));

		if (s.charAt(a) != s.charAt(b)) return end;

		a += 1
		b -= 1
	}

	return str;
}

function main() {
	/*
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const q = parseInt(readLine().trim(), 10);

	for (let qItr = 0; qItr < q; qItr++) {
		const s = readLine();

		const result = palindromeIndex(s);

		ws.write(result + '\n');
	}

	ws.end();
	*/

	console.log(palindromeIndex("babi7loolibab") + '\n');
	console.log(palindromeIndex("kaika") + '\n');
	console.log(palindromeIndex("poaoopi") + '\n');
}
