const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
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

    getOfficeNumber(data) {
        return `${data.officeNumber}`;
    }

    getRole() {

        return `Team Manager`;

    }
}

module.exports = Manager;