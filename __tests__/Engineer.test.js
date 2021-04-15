const Engineer = require('../lib/engineer');

test('should return role as Engineer', () => {    
    const employee = new Engineer('Lee', 2, 'email@email.com');
    const tester = 'Engineer';
    expect(employee.getRole()).toBe(tester);
    });
   


  