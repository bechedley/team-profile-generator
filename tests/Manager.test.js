const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with 'name' string, 'id' number, 'email' string and 'office number' number", () => {
      const manager = new Manager('Michael', 12, 'michael@email.com', 90978788);

      // Verify that the new object has the correct properties
      expect(manager.name).toEqual('Michael');
      expect(manager.id).toEqual(12);
      expect(manager.email).toEqual('michael@email.com');
      expect(manager.officeNumber).toEqual(90978788);
    });
  });

  describe("getRole", () => {
    it("should return 'Team Manager'", () => {
      // Create new objects to test with
      const manager = new Manager("Michele", 6, "michele@email.com", 56576879);

      // Verify that the role was returned as Manager
      expect(manager.getRole(manager)).toEqual("Team Manager");
    });

  });
});
