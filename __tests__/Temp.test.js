const Temp = require('../lib/Temp')

test('creates an Temp object', () => {
    const employee = new Temp('Michele Lynch','46','michele.lynch8@yahoo.com','MLLynch2K');
    
    expect(employee.name).toBe('Michele Lynch');
    expect(employee.id).toBe('46');
    expect(employee.email).toBe('michele.lynch8@yahoo.com')
    expect(employee.school).toBe('University of Scranton')
  });

test("gets temp's school", () => {
    const employee = new Temp('Michele Lynch','46','michele.lynch8@yahoo.com', 'UnivScranton');

    expect(employee.getSchool()).toEqual(expect.stringContaining(employee.school));
  });


test("gets temp role", () => {
    const employee = new Temp('Michele Lynch','46','michele.lynch8@yahoo.com','UnivScranton');

    expect(employee.getRole()).toEqual(expect.stringContaining("Temp"));
  });
