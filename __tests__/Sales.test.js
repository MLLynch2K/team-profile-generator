const Sales = require('../lib/Sales')

test('creates an sales object', () => {
    const employee = new Sales('Michele Lynch','46','michele.lynch8@yahoo.com','MLLynch2K');
    
    expect(employee.name).toBe('Michele Lynch');
    expect(employee.id).toBe('46');
    expect(employee.email).toBe('michele.lynch8@yahoo.com')
    expect(employee.github).toBe('MLLynch2K')
  });

test("gets employee github", () => {
    const employee = new Sales('Michele Lynch','46','michele.lynch8@yahoo.com', 'MLLynch2K');

    expect(employee.getGithub()).toEqual(expect.stringContaining(employee.github));
  });


test("gets employee role", () => {
    const employee = new Sales('Michele Lynch','46','michele.lynch8@yahoo.com','MLLynch2K');

    expect(employee.getRole()).toEqual(expect.stringContaining("Sales"));
  });
