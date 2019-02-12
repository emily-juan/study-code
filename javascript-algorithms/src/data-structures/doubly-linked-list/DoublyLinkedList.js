import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class DoublyLinkedList {
  constructor(comparatorFunction) {
    /** @var DoublyLinkedListNode */
    this.head = null;
    /** @var DoublyLinkedListNode */
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;

    this.tail = newNode;
    return this;
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deleteNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode;

        if (deleteNode === this.head) {
          this.head = deleteNode.next;

          if (this.head) {
            this.head.previous = null;
          }

          if (deleteNode === this.tail) {
            this.tail = null;
          }
        } else if (deleteNode === this.tail) {
          this.tail = deleteNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = deleteNode.previous;
          const nextNode = deleteNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
        currentNode.next = currentNode.next.next;
        currentNode.next.previous = currentNode;
      }

      currentNode = currentNode.next;
    }

    return deleteNode;
  }

  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      const deletedTail = this.tail;

      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    const deletedTail = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  fromArray(values) {
    values.forEach(value => this.append(value));

    return this;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;
      currentNode.previous = nextNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
