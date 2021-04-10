const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, role, id, email, gitHub) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
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

    getGithub() {
        return this.gitHub;
    }

    // returns 'Engineer'
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;