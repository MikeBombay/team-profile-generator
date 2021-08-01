const Manager = require("../lib/Manager");

test("set officeNo", () => {
  const testValue = 665;
  const man = new Manager("Manager Person", 2, "boss@manager.com", testValue);
  expect(man.officeNo).toBe(testValue);
});

test("get role", () => {
  const testValue = "Manager";
  const man = new Manager("Manager Person", 2, "boss@manager.com", testValue);
  expect(man.getRole()).toBe(testValue);
});

test("get officeNo", () => {
  const testValue = 665;
  const man = new Manager("Manager Person", 2, "boss@manager.com", testValue);
  expect(man.getOfficeNo()).toBe(testValue);
});