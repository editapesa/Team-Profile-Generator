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

getName();   
getId() ; 
getEmail();
 
    // returns 'Manager'
getRole();



// module.exports = Manager;