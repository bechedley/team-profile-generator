
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
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

    getRole() {

        return `Employee`;

    }
}

module.exports = Employee;