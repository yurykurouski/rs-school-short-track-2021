/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const arrayed = [];

  (function makeArr(list, key) {
    if (list) {
      if (list.value !== key) {
        arrayed.unshift(list.value);
        makeArr(list.next, key);
      } else {
        makeArr(list.next, key);
      }
    }
  }(l, k));

  const result = arrayed.reduce((acc, el) => {
    if (acc) {
      const listEl = { ...acc, value: el, next: acc };
      return listEl;
    }
    const listEl = { value: el, next: null };
    return listEl;
  }, null);

  return result;
}

module.exports = removeKFromList;
