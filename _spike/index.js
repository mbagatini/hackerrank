var petrolpumps = [
	[1, 7],
	[2, 17],
	[3, 4],
	[4, 2],
];

var initialPoint = null;

for (let i = 0; i < petrolpumps.length; i++) {
	var arr = petrolpumps[i];
	var [amount, distance] = arr;

	console.log(amount, distance);
}