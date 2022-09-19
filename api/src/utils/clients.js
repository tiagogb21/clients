/* eslint-disable no-param-reassign */
const getTotalRealties = (enterprises) => enterprises.reduce((acc, curr) => {
  acc += Number(curr.realties);
  return acc;
}, 0);

module.exports = getTotalRealties;
