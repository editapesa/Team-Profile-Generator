

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // add following methods
    // getName()
    // getId()
    // getEmail()
    // getrole()  - returns 'Employee'
}

class Manager extends Employee {}
    // add officeNumber property
    // getRole()  - returns 'Manager'

class Engineer extends Employee {}
    // add gitHub property
    // getGithub()
    // getRole()  - returns 'Engineer'

class Intern extends Employee {}
    // add school property
    // getSchool()
    // getRole()  - returns 'Intern"

