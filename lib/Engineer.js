const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.githhub = github;
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

    getGithub(data) {
        return `${data.github}`;
    }

    getRole() {

        return `Engineer`;

    }
}

module.exports = Engineer;