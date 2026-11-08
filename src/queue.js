const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null
    this.end = null
  }

  getUnderlyingList() {
    // Проверка пустоты очереди
    if (!this.head) {
      return null;
    }
    function convert(node) {
      if (!node) {
        return null;
      }


      return {
        value: node.value,
        next: convert(node.next)
      };
    };
    return convert(this.head);
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
  }

  dequeue() {
    // if (this.length === 0) {
    //   return undefined;
    // }
    if (this.head === null) {
      return undefined;
    }

    const value = this.head.value;

    this.head = this.head.next;

    if (this.head === null) {
      this.end = null;
    }

    return value;
  }
}

module.exports = {
  Queue
};
