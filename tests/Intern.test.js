const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with 'name' string, 'id' number, 'email' string and 'school' string", () => {
      const intern = new Intern("Vanessa", 20, "vanessa@email.com", "Sydney High School");

      // Verify that the new object has the correct properties
      expect(intern.name).toEqual("Vanessa");
      expect(intern.id).toEqual(20);
      expect(intern.email).toEqual("vanessa@email.com");
      expect(intern.github).toEqual("Sydney High School");
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      // Create new objects to test with
      const intern = new intern("Tom", 10, "tom@email.com", "Melbourne High School");

      // Verify that the role was returned as Intern
      expect(intern.getRole(intern)).toEqual("Intern");
    });

  });
});
