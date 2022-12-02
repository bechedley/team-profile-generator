const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with 'name', 'id', 'email' and 'github'", () => {
        const engineer = new Engineer("Ben", 1, "ben@email.com", "gitb");

        // Verify that the new object has the correct properties
        expect(engineer.name).toEqual("Ben");
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual("ben@email.com");
        expect(engineer.github).toEqual("gitb");
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      // Create new objects to test with
      const engineer = new Engineer("Molly", 7, "molly@email.com", "MollyGit");

      // Verify that the role was returned as Engineer
      expect(engineer.getRole(engineer)).toEqual("Engineer");
    });

  });
});
