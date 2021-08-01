const Intern = require("../lib/Intern");

test("gets school", () => {
    const testValue = "Ottawa U";
    const int = new Intern("Intern Boy", 111, "intern@unpaid.com", testValue);
    expect(int.getSchool()).toBe(testValue);
  });