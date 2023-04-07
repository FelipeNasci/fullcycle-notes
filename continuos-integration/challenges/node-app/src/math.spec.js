const { sum } = require("./math");

const my_tests = [{ name: "sum", expected: sum(2, 3), toBeIt: 5 }];

describe("math", () => {
  my_tests.forEach((test) =>
    it(test.name, () => expect(test.expect).toBe(test.toBe))
  );
});
