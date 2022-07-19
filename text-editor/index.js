const fs = require('fs');

function processData(input) {
	var arr = input.split('\n');
	var sentence = "";
	var operations = [];

	for (let i = 1; i <= arr[0]; i++) {
		var q = arr[i];
		var arg = null;

		if (arr[i].indexOf(' ') >= 0) {
			var op = arr[i].split(' ');
			[q, arg] = op;
		}

		// console.log(i, "\n", sentence)

		switch (q * 1) {
			case 1:
				sentence += arg;
				break;
			case 2:
				var end = sentence.length - arg;
				sentence = sentence.substring(0, end);
				break;
			case 3:
				console.log(sentence.charAt(arg - 1));
				break;
			case 4:
				if (operations.length - 2 >= 0) {
					// remove the undones and keep the current
					sentence = operations[operations.length - 2];
					operations.pop();
				} else {
					sentence = "";
					operations = [];
				}
				break;
		}

		if ([1, 2].includes(q * 1)) {
			operations.push(sentence);
		}
	}
}

fs.readFile('input.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	// console.log(data);
	processData(data);
});
