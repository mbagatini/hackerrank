class Node {
	constructor(nodeData) {
		this.data = nodeData;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertNode(nodeData) {
		const node = new Node(nodeData);

		if (this.head == null) {
			this.head = node;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
	}

	removeFirstNode() {
		this.head = this.head.next;
	}
}

function processData(input) {
	var line = new LinkedList();
	var num = 0;

	for (let l of input.split('\n')) {
		if (l.indexOf(' ') != -1) {
			var data = l.split(' ');
			l = data[0];
			num = data[1];
		}


		switch (parseInt(l)) {
			case 1:
				line.insertNode(num);
				break;
			case 2:
				line.removeFirstNode();
				break;
			case 3:
				console.log(line.head.data);
				break;
		}
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
	_input += input;
});

process.stdin.on("end", function () {
	processData(_input);
});
