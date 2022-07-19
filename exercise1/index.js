/**
 * Problem
 * Recebo array de int - ordenado
 * Recebo num int
 * Escrever função para procurar num no array
 * se nao existir -1
 * 0 log n
 */

function searchNumber(n, arr) {
	var index = -1;

	// simple search
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] == n) {
	// 		index = i;
	// 		break;
	// 	}
	// }

	// binary search
	var ini = 0;
	var end = arr.length - 1;

	while (ini != end) {
		var mid = Math.ceil(ini + (end - ini) / 2);

		if (n == arr[mid]) {
			index = mid;
			break;
		}

		if (n < arr[mid]) {
			end = mid - 1;
		} else {
			ini = mid + 1;
		}
	}

	return index;
}

console.log(searchNumber(7, [1, 2, 3, 4, 5, 6, 7, 8]));