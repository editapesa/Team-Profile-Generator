const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, role, id, email, gitHub) {
        super(name, role, id, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return Engineer;
    }
}

module.exports = Engineer;