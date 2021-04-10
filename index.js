const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

inquirer.prompt([
    {
        type: 'input',
        message: "What is the team member's name?",
        name: 'name',
    },
    {
        type: 'list',
        message: 'What is their role?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        message: "What is the team member's ID number?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team member's email?",
        name: 'email',
    }
])
    
.then((response) => {
        if (response.role === 'Engineer')  {
            getGithub();
        }else if (response.role === 'Intern') {
            getSchool();
        }else {
            getOfficeNumber();
        }
    });


function getGithub() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is their GitHub profile username?",
                name: 'github',
            }
        ])
    };

function getSchool() {
        inquirer.prompt([
            {
                type: 'input',
                message: "Which school do they attend?",
                name: 'school',
            }
        ])
    };

function getOfficeNumber() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is their office number?",
                name: 'officeNumber',
            }
        ])
    };

// .then(answers => {
//     fs.writeFile('index.html', Employee({...answers}))
// })


// ??? function to write html, init app, call to init app??
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(fileName, data);
// }

// function init() {
//     inquirer.prompt(questions).then(answers => {
//         writeToFile('index.html', Employee({...answers}))
//     })
// }

// init();









    
    

