const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

inquirer.prompt([
    {
        type: 'input',
        message: "Enter the team manager's name.",
        name: 'mgrName',
    },
    {
        type: 'input',
        message: "Enter the team manager's ID number.",
        name: 'mgrId',
    },
    {
        type: 'input',
        message: "Enter the team manager's email.",
        name: 'mgrEmail',
    },
    {
        type: 'input',
        message: "Enter the team manager's office number.",
        name: 'officeNbr',
    },
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'nextStep',
        choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
    },
])
    
.then((response) => {
        if (response.nextStep === 'Add an engineer')  {
            addEngineer();
        }else if (response.nextStep === 'Add an intern') {
            addIntern();
        }else {
            finishTeam();
        }
    });


function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                message: "Enter the engineer's name.",
                name: 'engName',
            },
            {
                type: 'input',
                message: "Enter the engineer's ID number.",
                name: 'engId',
            },
            {
                type: 'input',
                message: "Enter the engineer's email.",
                name: 'engEmail',
            },
            {
                type: 'input',
                message: "What is their GitHub profile username?",
                name: 'github',
            },
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'nextStep',
                choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
            },
        ])

        .then((response) => {
            if (response.nextStep === 'Add an engineer')  {
                addEngineer();
            }else if (response.nextStep === 'Add an intern') {
                addIntern();
            }else {
                finishTeam();
            }
        });
    };

function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: "Enter the intern's name.",
                name: 'intName',
            },
            {
                type: 'input',
                message: "Enter the intern's ID number.",
                name: 'intId',
            },
            {
                type: 'input',
                message: "Enter the intern's email?",
                name: 'intEmail',
            },
            {
                type: 'input',
                message: "Which school do they attend?",
                name: 'school',
            },
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'nextStep',
                choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
            },
        ])

        .then((response) => {
            if (response.nextStep === 'Add an engineer')  {
                addEngineer();
            }else if (response.nextStep === 'Add an intern') {
                addIntern();
            }else {
                finishTeam();
            }
        });
    };

function finishTeam() {
        
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









    
    

