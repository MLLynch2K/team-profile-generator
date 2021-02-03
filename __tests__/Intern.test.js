const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    const employee = new Intern('Michele Lynch','46','michele.lynch8@yahoo.com','UnivAngelGrove');
    
    expect(employee.name).toBe('Michele Lynch');
    expect(employee.id).toBe('46');
    expect(employee.email).toBe('michele.lynch8@yahoo.com')
    expect(employee.school).toBe('UnivAngelGrove')
  });

test("gets intern's school", () => {
    const employee = new Intern('Michele Lynch','46','michele.lynch8@yahoo.com', 'UnivAngelGrove');

    expect(employee.getSchool()).toEqual(expect.stringContaining(employee.school));
  });


test("gets intern role", () => {
    const employee = new Intern('Michele','46','michele.lynch8@yahoo.com','UnivAngelGrove');

    expect(employee.getRole()).toEqual(expect.stringContaining("Intern"));
  });
