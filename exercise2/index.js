/**
 * Problem
 * inverter arvore
 */

const Node = class {
	value = null;
	left = null;
	right = null;
}

//            1
//        2     3
//     4    5     6
//
//          1
//      3        2 
//   6         5    4

function invertTree(root) {
	if (root.value == null) return;
}