/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      const { length } = arr.filter((el) => el === arr[i]);
      const el = `${length > 1 ? length : ''}${arr[i]}`;

      if (!stack.includes(el)) {
        stack.push(el);
      }
    } if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      stack.push(arr[i]);
    }
  }

  return stack.join('');
}

module.exports = encodeLine;
