function twoSumExponential(nums, target) {
	// solution 1
	var indexes = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (j == i) continue;

			if (nums[i] + nums[j] == target) {
				indexes.push(i, j);
				break;
			}
		}

		if (indexes.length > 0) {
			break;
		}
	}

	return indexes;
}

// console.log(twoSumExponential([2, 7, 11, 15], 9));
// console.log(twoSumExponential([3, 2, 4], 6));

function twoSumLinear(nums, target) {
	var indexes = [];
	var map = new Map();

	for (var i = 0; i < nums.length; i++) {
		var searchedNum = target - nums[i];

		if (map.has(searchedNum)) {
			var pos = map.get(searchedNum);
			indexes.push(pos, i);
			break;
		} else {
			map.set(nums[i], i);
		}
	}

	return indexes;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	var map = new Map();

	for (var [idx, value] of nums.entries()) {
		var targetNumber = target - value;

		if (map.has(targetNumber)) {
			var index = map.get(targetNumber);
			return [index, idx];
		}

		map.set(value, idx);
	}

	return [];
};

console.log(twoSumLinear([2, 7, 11, 15], 9));
console.log(twoSumLinear([3, 2, 4], 6));