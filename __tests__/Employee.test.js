const Employee = require('../lib/employee');

test('should return role as Employee', () => {    
    const employee = new Employee('Lee', 2, 'email@email.com');
    const tester = 'Employee';
    expect(employee.getRole()).toBe(tester);
    });
   




