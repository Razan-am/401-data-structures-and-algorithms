'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let pointer = this.head;
    while (pointer.value !== value) {
      pointer = pointer.next;
      if (pointer === null) {
        return false;
      }
    }
    return true;
  }

  toString() {
    let pointer = this.head;
    let result = '';
    while (pointer) {
      result += `{ ${pointer.value} } -> `;
      pointer = pointer.next;
      if (!pointer) {
        result += 'NULL'
      }
    }
    return result;
  }


  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentValue = this.head;
      while (currentValue.next) {
        currentValue = currentValue.next;
      }
      currentValue.next = node;
    }
  }

  insertBefore(old, neu) {
    let currentNode = this.head;
    if (currentNode.value === old) {
      this.insert(neu);
    } else {
      let nextNode;
      while (currentNode.value !== old) {
        currentNode = currentNode.next;
        nextNode = currentNode.next;
      }
      currentNode.value = neu;
      currentNode.next = nextNode;
    }
  }

  insertAfter(old, neu) {
    let currentNode = this.head;
    let nextNode;
    while (currentNode.value !== old) {
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return this.append(neu);
    } else {
      let newNode = new Node(neu);
      currentNode.next = newNode;
      currentNode.next.next = nextNode;
    }
  }

  kthFromEnd(k) {
    if (k < 0) { return 'error'; }
    let arr = this.toString(this.head).split(' -> ');
    arr.pop();
    if (k > arr.length - 1) { return 'exception'; }
    if (k === arr.length - 1) { return arr[0]; }
    if (k === 0) { return arr[arr.length - 1]; }
    let counter = 0;
    return arr[arr.length - 1 - k]
  }
}
module.exports = LinkedList;