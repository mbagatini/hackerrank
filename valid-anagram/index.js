/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	// remove spaces
	s = s.replace(/\s/g, '');
	t = t.replace(/\s/g, '');

	// map letters
	var mapS = new Map();

	// map S
	for (var l of s.split('')) {
		if (mapS.has(l)) {
			mapS.get(l).count++;
		} else {
			mapS.set(l, { count: 1 });
		}
	}

	var mapT = new Map();

	// map T
	for (var l of t.split('')) {
		if (mapT.has(l)) {
			mapT.get(l).count++;
		} else {
			mapT.set(l, { count: 1 });
		}
	}

	// compare
	for (var [idx, obj] of mapT) {
		if (!mapS.has(idx)) {
			return false;
		}

		if (mapS.get(idx).count != obj.count) {
			return false;
		}
	}

	return true;
};

isAnagram('anagram', 'nagraram');