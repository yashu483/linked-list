'use strict';

import { Node } from './new-node';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  get size() {
    let count = 0;

    const getSize = function getSize(node) {
      count += 1;
      if (node.next === null) {
        return count;
      } else {
        return getSize(node.next);
      }
    };
    return getSize(this.head);
  }
}

export { LinkedList };
