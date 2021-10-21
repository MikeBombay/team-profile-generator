const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Maurice Bombay', '525', 'maumau@gmail.com');
  
    expect(employee.name).toBe('Maurice Bombay');
    expect(employee.id).toBe('525');
    expect(employee.email).toBe('maumau@gmail.com')
  });