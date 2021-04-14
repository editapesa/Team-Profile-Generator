const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const render = require('./html-temp');

const teamMembers = [];
// const teamIds = [];

// const createTeam = team => {
//     const generateMgr = manager => {
//         return `
//         <div class='col-lg-4 col-md-6 col-sm-12 p-3'>
//             <div class='card bg-light' id='mgr-card'>
//                 <div class='card-header'>
//                     <h2 class='text-light'>${manager.getName()}</h1>
//                     <h3 class='text-light'>${manager.getRole()}</h2>
//                 </div>
//                 <ul class='list-group p-3'>
//                     <li class='list-group-item'>ID: ${manager.getId()}</li>
//                     <li class='list-group-item'><a href="mailto: ${manager.getEmail()}" target="_blank">Email: </a></li>
//                     <li class='list-group-item'>Office number: ${manager.getOfficeNumber()}</li>
//                 </ul>
//             </div>
//         </div>`;
//     };

//     const generateEng = engineer => {
//         return `
//         <div class='col-lg-4 col-md-6 col-sm-12 p-3'>
//             <div class='card bg-light' id='eng-card'>
//                 <div class='card-header'>
//                     <h2 class='text-light'>${engineer.getName()}</h1>
//                     <h3 class='text-light'>${engineer.getRole()}</h2>
//                 </div>
//                 <ul class='list-group p-3'>
//                     <li class='list-group-item'>ID: ${engineer.getId()}</li>                       
//                     <li class='list-group-item'><a href="mailto: ${engineer.getEmail()}" target="_blank">Email: </a></li>
//                     <li class='list-group-item'><a href="https://github.com/${engineer.getGithub()}" target="_blank">GitHub: </a></li>
//                 </ul>
//             </div>
//         </div>`;
//     };

//     const generateInt = intern => {
//         return `
//         <div class='col-lg-4 col-md-6 col-sm-12 p-3'>
//             <div class='card bg-light' id='int-card'>
//                 <div class='card-header'>
//                     <h2 class='text-light'>${intern.getName()}</h1>
//                     <h3 class='text-light'>Intern</h2>
//                 </div>
//                 <ul class='list-group p-3'>
//                     <li class='list-group-item'>ID: ${intern.getId()}</li>
//                     <li class='list-group-item'><a href="mailto: ${intern.getEmail()}" target="_blank">Email: </a></li>
//                     <li class='list-group-item'>School: ${intern.getSchool()}</li>
//                 </ul>
//             </div>
//         </div>`;
//     };

//     const html = [];

//     html.push(team
//         .filter(employee => employee.getRole() === 'Manager')
//         .map(manager => generateMgr(manager))
//     );
//     html.push(team
//         .filter(employee => employee.getRole() === 'Engineer')
//         .map(engineer => generateEng(engineer))
//         .join('')
//     );
//     html.push(team
//         .filter(employee => employee.getRole() === 'Intern')
//         .map(intern => generateInt(intern))
//         .join('')
//     );

//     return html.join('');

// }

// module.exports = team => {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Team Profile Generator</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
//         <style>
//             .jumbotron {
//                 min-height: 150px;
//                 padding-top: 50px;
//             }
//             .card-header {
//                 background-color:mediumpurple;
//             }
//         </style>
//     </head>
    
//     <body>
    
//         <header class='jumbotron bg-info'>
//             <h1 class='text-center text-dark'>My Team</h1>
//         </header>
    
//         <div class='container'>
//             <div class='row justify-content-evenly p-3'>
//                 ${createTeam(team)}
//             </div>
//         </div>
    
//     </body>
//     </html>`;
//         };

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
            // teamIds.push(answers.mgrId);
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
                // teamIds.push(answers.engId);
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









    
    

