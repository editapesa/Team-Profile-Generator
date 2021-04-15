const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const render = require('./src/html-temp');

const teamMembers = [];

function startApp() {

    function createMgr() {
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
        ]).then(answers => {
            const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.officeNbr);
            teamMembers.push(manager);
            nextStep();
        });
    }
    
    function nextStep() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'nextChoice',
                choices: ['Add an engineer', 'Add an intern', 'Finish building team'],
            }
        ]).then((userChoice) => {
            switch (userChoice.nextChoice) {
                case 'Add an engineer':
                    addEngineer();
                    break;
                case 'Add an intern':
                    addIntern();
                    break;
                default:
                    generateHtml();
            }
        });
    }
         
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
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.github);
                teamMembers.push(engineer);
                nextStep();   
        });
    }

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
            ]).then(answers => {
                const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.school);
                teamMembers.push(intern);
                nextStep();        
        });
    }

    function generateHtml() {

        return fs.writeFile('index.html', render(teamMembers), (err) =>
        err ? console.log(err) : console.log('\nTeam building is completed and an HTML file will be created')
        );
    }

    createMgr();

}     

startApp();









    
    

