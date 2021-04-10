class Employee {
    constructor(name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }

    // add following methods
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    // returns 'Employee'
    getRole() {
        return this.role;
    } 
}

module.exports = Employee;