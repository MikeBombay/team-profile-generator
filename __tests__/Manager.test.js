const Manager = require("../lib/Manager");

test('creates a manager object', () => {
    const man = new Manager("Manager Person", 2, "boss@manager.com", "665");
    
    expect(man.name).toBe("Manager Person");
    expect(man.id).toBe(2);
    expect(man.email).toBe("boss@manager.com");
    expect(man.officeNo).toBe("665");
});


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