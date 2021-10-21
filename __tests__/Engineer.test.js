const Engineer = require("../lib/Engineer");

test("gets GitHub username", () => {
    const testValue = "user44";
    const eng = new Engineer("Engineer Boy", 555, "engineer@test.com", testValue);
    expect(eng.getGithub()).toBe(testValue);
  });