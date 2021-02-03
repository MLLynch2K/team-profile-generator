const Manager = require('../lib/Manager')

test('creates an Manager object', () => {
    const employee = new Manager('Michele Lynch','46','michele.lynch8@yahoo.com', '1');
    
    expect(employee.name).toBe('Michele Lynch');
    expect(employee.id).toBe('46');
    expect(employee.email).toBe('michele.lynch8@yahoo.com')
    expect(employee.officeNumber).toBe('1')
  });

test("gets manager's office number", () => {
    const employee = new Manager('Michele Lynch','46','michele.lynch8@yahoo.com', '1');

    expect(employee.getOfficeNumber()).toEqual(expect.stringContaining(employee.officeNumber.toString()));
  });


test("gets manager's role", () => {
    const employee = new Manager('Michele','46','michele.lynch8@yahoo.com','1');

    expect(employee.getRole()).toEqual(expect.stringContaining("Manager"));
  });