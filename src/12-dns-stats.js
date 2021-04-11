/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  if (domains.length === 0) return result;

  domains.forEach((el) => {
    const firstLDomain = el.match(/.\w+$/)[0];

    const secondLDomain = el.replace(firstLDomain, '').match(/\w+$/)[0];

    result = {
      ...result,
      [firstLDomain]: result[firstLDomain] ? result[firstLDomain] + 1 : 1,
      [`${firstLDomain}.${secondLDomain}`]: result[`${firstLDomain}.${secondLDomain}`] ? result[`${firstLDomain}.${secondLDomain}`] + 1 : 1,
    };

    if (el.replace(`${secondLDomain}${firstLDomain}`, '')) {
      const thirdLDomain = el.replace(`${secondLDomain}${firstLDomain}`, '').match(/^\w+/)[0];

      result = {
        ...result,
        [`${firstLDomain}.${secondLDomain}.${thirdLDomain}`]: result[`${firstLDomain}.${secondLDomain}.${thirdLDomain}`] ? [`${firstLDomain}.${secondLDomain}.${thirdLDomain}`] + 1 : 1,
      };
    }
  });

  return result;
}

module.exports = getDNSStats;
