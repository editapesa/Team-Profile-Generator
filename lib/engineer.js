const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }

    getGithub()
    getRole()  // returns 'Engineer'
}

module.exports = Engineer;