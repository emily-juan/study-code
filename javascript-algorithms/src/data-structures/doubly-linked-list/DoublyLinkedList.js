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
}
