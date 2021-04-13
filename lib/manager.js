const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super(name, role, id, email);
        // this.name = name;
        // this.role = role;
        // this.id = id;
        // this.email = email;
        this.officeNumber = officeNumber;
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

    // returns 'Manager'
    getRole() {
        return this.role;
    }

}



module.exports = Manager;