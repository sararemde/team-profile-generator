// import employee constructor
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        //calling parent constructor (Employee)
        this.school = school;
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;