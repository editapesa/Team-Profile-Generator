

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // add following methods
    getName()
    getId()
    getEmail()
    getrole()   // returns 'Employee'
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole()  // returns 'Manager'
}

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

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool()
    getRole()  // returns 'Intern"
}
    
    

