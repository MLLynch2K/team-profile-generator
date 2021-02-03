const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Michele Lynch','46','michele.lynch8@yahoo.com');
    
    expect(employee.name).toBe('Michele Lynch');
    expect(employee.id).toBe('46');
    expect(employee.email).toBe('michele.lynch8@yahoo.com')
  });

  test("gets employee's name", () => {
    const employee = new Employee('Michele','46','michele.lynch8@yahoo.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
  });

  test("gets employee's id", () => {
    const employee = new Employee('Michele','46','michele.lynch8@yahoo.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id))
  });

  test("gets employee email", () => {
    const employee = new Employee('Michele','46','michele.lynch8@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
  });

  test("gets employee role", () => {
    const employee = new Employee('Michele','46','michele.lynch8@yahoo.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
  });

  module.exports = Employee 