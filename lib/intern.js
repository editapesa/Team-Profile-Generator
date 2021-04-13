const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super(name, role, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return Intern;
    }
}

module.exports = Intern;