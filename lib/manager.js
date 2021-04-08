const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName()
    getId()
    getEmail()
    getRole()  // returns 'Manager'
}

module.exports = Manager;