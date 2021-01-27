const Employee = require('../lib/Employee')

class HumanResources extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github;
    }

    getRole () {
        return "Human Resources"
    }
}

module.exports = HumanResources