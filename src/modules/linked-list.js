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
  at(index) {
    const getNode = function getNode(node, index) {
      if (index === 0) {
        return node;
      } else if (node.next === null && index > 0) {
        return 'Error: Out of range Index.';
      } else {
        return getNode(node.next, index - 1);
      }
    };
    return getNode(this.head, index);
  }
  pop() {
    const remove = function remove(node) {
      if (node.next.next === null) {
        node.next = null;
        return node;
      } else {
        return remove(node.next);
      }
    };
    this.tail = remove(this.head);
  }

  contains(value) {
    const check = function check(node) {
      if (node.next === null && node.value !== value) {
        return false;
      } else if (node.value === value) {
        return true;
      } else {
        return check(node.next);
      }
    };
    return check(this.head);
  }

  find(value) {
    let count = 0;
    const check = function check(node) {
      if (node.next === null && node.value !== value) {
        return null;
      } else if (node.value === value) {
        return count;
      } else {
        count += 1;
        return check(node.next);
      }
    };
    return check(this.head);
  }
}

export { LinkedList };
