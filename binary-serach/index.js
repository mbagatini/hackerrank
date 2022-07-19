function searchNumber(nums, target) {
	var ini = 0;
	var end = nums.length - 1;

	while (ini <= end) {
		var mid = Math.round((ini + end) / 2);

		if (nums[mid] == target) {
			return mid;
		}

		// 0 1 2 3 4  5  6  7
		// 2 4 6 8 10 12 16 18

		if (nums[mid] < target) {
			ini = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return -1;
}

console.log(searchNumber([2, 4, 6, 8, 10, 12, 16, 18], 12));
console.log(searchNumber([2, 4, 6, 8, 10, 12, 16, 18], 4));
console.log(searchNumber([2, 4, 6, 8, 10, 12, 16, 18], 10));
console.log(searchNumber([2, 4, 6, 8, 10, 12, 16, 18], 18));
console.log(searchNumber([2, 4, 6, 8, 10, 12, 16], 2));