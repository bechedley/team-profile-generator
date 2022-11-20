const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getName(data) {
        return `${data.name}`;
    }

    getId(data) {
        return `${data.id}`;
    }

    getEmail(data) {
        return `${data.email}`;
    }

    getSchool(data) {
        return `${data.school}`;
    }

    getRole() {

        return `Intern`;

    }
}

module.exports = Intern;