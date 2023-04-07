const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const multiply = (a, b) => a * b;
const square = (a) => times(a, a);

module.exports = {
  sum,
  sub,
  times,
  square,
  multiply,
};