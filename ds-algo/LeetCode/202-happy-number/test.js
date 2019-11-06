const happyNumber = require("./index");

//console.log(happyNumber.isHappy(1));

test("is 1 a Happy Number", () => {
  expect(happyNumber.isHappy(1)).toBe(true);
});
