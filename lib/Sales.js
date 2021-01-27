const Employee = require('../lib/Employee')

class Sales extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github;
    }

    getRole () {
        return "Sales"
    }
}

module.exports = Sales
