const Node = require("./Node.js");

class LinkedList {
  constructor(head = null, size = 0) {
    this.listHead = head;
    this.size = size;
  }

  append(value) {
    const node = new Node(value);
    this.size++;

    if (this.listHead === null) {
      this.listHead = node;
      return;
    }

    let pointer = this.listHead;
    while (pointer.nextNode) pointer = pointer.nextNode;
    pointer.nextNode = node;
  }
  prepend(value) {
    const node = this.listHead;
    const newNode = new Node(value, this.listHead);

    newNode.nextNode = node;
    this.listHead = newNode;
    this.size++;
  }

  insertAt(value, index) {
    if (this.listHead == null) {
      this.prepend(value);
      return;
    }

    let cur = this.listHead;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = cur;
      cur = cur.nextNode;
      if (cur == null) break; // if index is bigger than end of list, add node at end of list
    }
    const tmp = new Node(value);
    prev.nextNode = tmp;
    tmp.nextNode = cur;
  }
  removeAt(index) {
    if (this.listHead == null) throw Error("List is already empty");
    if (index === 0) {
      this.listHead = this.listHead.nextNode;
      return;
    }

    let cur = this.listHead;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = cur;
      cur = cur.nextNode;
      if (cur == null) throw Error("Index Out of Bound");
    }
    prev.nextNode = cur.nextNode;
    this.size--;
  }

  size() {
    return size;
  }
  head() {
    return this.listHead;
  }
  tail() {
    let newNode = this.listHead;
    while (newNode.nextNode != null) newNode = newNode.nextNode;
    return newNode;
  }
  at(index) {
    let node = this.listHead;
    if (index == 0) return this.listHead;

    while (index--) {
      if (node.nextNode !== null) node = node.nextNode;
      else throw Error("Index Out of Bound");
    }

    return node;
  }
  pop() {
    let curNode = this.listHead;
    let prevNode = null;
    while (curNode.nextNode != null) {
      prevNode = curNode;
      curNode = curNode.nextNode;
    }
    prevNode.nextNode = null;
    this.size--;
    return curNode;
  }
  contains(value) {
    let node = this.listHead;
    while (node) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }
  find(value) {
    let node = this.listHead;
    for (let i = 0; i < this.size; i++) {
      if (node.value === value) return i;
      node = node.nextNode;
    }
    return -1;
  }
  toString() {
    let node = this.listHead;
    let result = "";
    while (node) {
      result += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    return (result += "null");
  }
}

module.exports = LinkedList;
