import { template } from "@babel/core";

class Node {
  constructor(value, thisNode) {
    this.value = value;
    this.next = thisNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  apend(value) {
    let thisNode = this.head;
    while (thisNode.next !== null) thisNode = thisNode.next;
    thisNode.next = new Node(value, null);
  }

  size() {
    let nodes = 1;
    let thisNode = this.head;
    while (thisNode.next !== null) {
      thisNode = thisNode.next;
      nodes += 1;
    }
    return nodes;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let thisNode = this.head;
    while (thisNode.next !== null) thisNode = thisNode.next;
    return thisNode;
  }

  at(index) {
    let nodes = 0;
    let thisNode = this.head;
    while (thisNode.next !== null && nodes !== index) {
      thisNode = thisNode.next;
      nodes += 1;
    }
    return thisNode;
  }

  pop() {
    let thisNode = this.head;
    while (thisNode.next.next !== null) thisNode = thisNode.next;
    thisNode.next = null;
  }

  contains(value) {
    let thisNode = this.head;
    while (thisNode.value !== value && thisNode.next !== null) {
      thisNode = thisNode.next;
    }
    if (thisNode.value === value) return true;
    return false;
  }

  find(value) {
    if (this.contains(value)) {
      let thisNode = this.head;
      let index = 0;
      while (thisNode.value !== value && thisNode.next !== null) {
        thisNode = thisNode.next;
        index += 1;
      }
      return index;
    }
    return null;
  }

  toString() {
    let thisNode = this.head;
    let printView = "";
    while (thisNode.next !== null) {
      printView += `( ${thisNode.value} ) -> `;
      thisNode = thisNode.next;
    }
    printView += `( ${thisNode.value} ) -> null`;
    return printView;
  }

  insertAt(value, index) {
    this.at(index - 1).next = new Node(value, this.at(index));
  }

  removeAt(index) {
    this.at(index - 1).next = this.at(index).next;
  }
}

export { LinkedList, Node };
