// Would you like me to implement a linked list in JavaScript? (Yes)
// What should I return if the value was not found? (return -1)
// What should I do if the value exists more than once? (return first)
// What should I return if the value was the first? (return null)
// Will it be reasonable to keep a link to the previous element, aka doubly linked list? (No)

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
	setNext(node) {
		this.next(node);
	}
}
class LinkedList {
	constructor(node) {
		this.first = node;
		this.curr = node;
	}
	getFirst() {
		return this.first;
	}
	insert(node) {
		this.curr.next = node;
		this.curr = this.curr.next;
	}
	precedingValue(val) {
		if (this.first) {
			return this._precedingValueInternal(this.first, null, val);
		}
	}
	_precedingValueInternal(curr, prevVal, requiredVal) {
		if (curr.value == requiredVal) {
			return prevVal;
		} else if (curr.next) {
			return this._precedingValueInternal(curr.next, curr.value, requiredVal);
		} else {
			return -1;
		}
	}
}
