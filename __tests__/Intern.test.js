const Intern = require('../lib/intern');

test('should return role as Intern', () => {    
    const employee = new Intern('Joe', 3, 'mail@gmail.com');
    const tester = 'Intern';
    expect(employee.getRole()).toBe(tester);
    });
   
