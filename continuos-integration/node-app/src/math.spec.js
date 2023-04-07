const { sum, sub, square } = require("./math");

const my_tests = [
  { name: "sum", expected: sum(2, 3), toBeIt: 5 },
  { name: "sub", expect: sub(2, 3), toBe: -1 },
  { name: "square", expect: square(2), toBe: 5 },
];

describe("math", () => {
  my_tests.forEach((test) =>
    it(test.name, () => expect(test.expect).toBe(test.toBe))
  );
});
