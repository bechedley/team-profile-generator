const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with 'name' string, 'id' number, and 'email' string", () => {
      const employee = new Employee("Joe", 2, "joe@email.com");

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual("Joe");
      expect(employee.id).toEqual(2);
      expect(employee.email)toEqual("joe@email.com");
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      // Create new objects to test with
      const employee = new Employee("Sam", 1, "sam@email.com");

      // Verify that the role was returned as Employee
      expect(employee.getRole(employee)).toEqual("Employee");
    });

  });
});
