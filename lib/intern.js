const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    // returns 'Intern"
    getRole() {
        return this.role;
    }
}

module.exports = Intern;