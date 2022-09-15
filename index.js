// link to the template helper code
const generateHTML = require('./src/generateHTML')
// link to the classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Enginner');
const Intern = require('./lib/Intern');
// node modules
const inquirer = require('inquirer');
const fs = require('fs');

const employees = [];

function init() {
    startHtml();
    addMember();
}

function addMemeber() {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'name',
            message: "Enter team memeber's name",
            choices: [
                'Engineer',
                'Intern',
                'Manager'
            ],
            name: 'role'
        },
        {
            message: "Enter members ID",
            name: 'id'
        },
        {
            message: 'Enter email',
            name: 'email'
        },
        {
            message: 'Enter office number',
            name: 'number'
        }
    ])
    .then(function({name, role, id, email, number}) {
        let roleInfo = "";
        if (role === 'Engineer') {
            roleInfo = "GitHub username";
        } else if (role === 'Intern') {
            roleInfo = "school name";
        } else {
            roleInfo = 'office phone number';
        }
        inquirer.prompt([{
            message: "Enter team member's ${roleInfo}",
            name: 'roleInfo'
        },
        {
            type: 'list',
            message: 'Would you like to add a member?',
            choices: [
                'yes',
                'no'
            ],
            name: 'moreMembers'
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMeber;
            if (role === 'Engineer') {
                newMember = new Engineer(name, id, email, roleInfo, number);
            } else if (role === 'Intern') {
                newMember = new Intern(name, id, emai, roleInfo, number);
            } else {
                newMeber = new Manager(name, id, email, roleInfo, number);
            }
            employees.push(newMember);
            addHtml(newMeber)
            .then(function() {
                if (moreMembers === 'yes') {
                    addMemeber();
                } else {
                    finsihHtml();
                }
            });
        });
    });
}

                    
    fs.writeFile('./dist/index.html', data, err => {
        //if there is an error
        if (err) {
            console,log(err);
            return;
        // for when the profile is created

        } else {
            console.log('success!')
        }
    })
;

init()