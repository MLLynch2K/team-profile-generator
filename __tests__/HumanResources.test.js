const Manager = require('../lib/HumanResources')

test('creates an HumanResources object', () => {
    const employee = new Manager('Michele Lynch','46','michele.lynch8@yahoo.com', '1');
    
    expect(employee.name).toBe('Michele Lynch');
    expect(employee.id).toBe('46');
    expect(employee.email).toBe('michele.lynch8@yahoo.com')
    expect(employee.officeNumber).toBe('1')
  });

test("gets human resource's office number", () => {
    const employee = new Manager('Michele','46','michele.lynch8@yahoo.com', '1');

    expect(employee.getOfficeNumber()).toEqual(expect.stringContaining(employee.officeNumber.toString()));
  });


test("gets human resource's role", () => {
    const employee = new HumanResources('Michele','46','michele.lynch8@yahoo.com','1');

    expect(employee.getRole()).toEqual(expect.stringContaining("Human Resources"));
  });