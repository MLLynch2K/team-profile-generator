const Employee = require('../lib/Employee')

class Temp extends Employee {
    constructor (name, id, email, school) {
    super(name,id,email)
    this.school = school
    }

    getSchool() {
        return this.school
    }
    
    getRole() {
        return "Temp";
    }
};

module.exports = Temp
