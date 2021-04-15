const Manager = require('../lib/manager');

test('should return role as Manager', () => {    
    const employee = new Manager('Pat', 4, 'pat@email.com');
    const tester = 'Manager';
    expect(employee.getRole()).toBe(tester);
    });
   
