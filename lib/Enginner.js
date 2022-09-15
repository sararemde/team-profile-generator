// importing Employee constructor
const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email); 
        // super keyword is used to access and call on an object's parent
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;