const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = {};
  }

  get size() {
    let count = 0;
    let copy = { ...this.queue };

    while (copy) {
      count++;
      copy = copy.next;
    }

    return count;
  }

  enqueue(element) {
    const nodeList = new ListNode(element);

    if (!this.queue.value) {
      this.queue = nodeList;
      return;
    }

    const arrayed = [];
    let copy = { ...this.queue };

    while (copy) {
      arrayed.unshift(copy.value);
      copy = copy.next;
    }

    arrayed.unshift(element);

    this.queue = arrayed.reduce((acc, el) => {
      if (acc) {
        const listNode = { ...acc, value: el, next: acc };
        return listNode;
      }
      const listNode = { value: el, next: null };
      return listNode;
    }, null);
  }

  dequeue() {
    const top = this.queue.value;

    if (this.queue.next) {
      this.queue.value = this.queue.next.value;
      this.queue.next = this.queue.next.next;

      return top;
    }
    this.queue = {};

    return top;
  }
}

module.exports = Queue;
