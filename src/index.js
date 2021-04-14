const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('../lib/employee');

const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const generateHtml = (answers) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <style>
            .jumbotron {
                min-height: 150px;
                padding-top: 50px;
            }
            .card-header {
                background-color:mediumpurple;
            }
        </style>
    </head>
    
    <body>
    
        <header class='jumbotron bg-info'>
            <h1 class='text-center text-dark'>My Team</h1>
        </header>
    <br>
    
        <div class='container'>
            <div class='row justify-content-evenly p-3'>
                <div class='col-lg-4 col-md-6 col-sm-12 p-3'>
                    <div class='card bg-light' id='mgr-card'>
                        <div class='card-header'>
                            <h2 class='text-light'>${answers.mgrName}</h1>
                            <h3 class='text-light'>Manager</h2>
                        </div>
                        <ul class='list-group p-3'>
                            <li class='list-group-item'>ID: ${answers.mgrId}</li>
                            <li class='list-group-item'><a href="mailto: ${answers.mgrEmail}" target="_blank">Email: </a></li>
                            <li class='list-group-item'>Office number: ${answers.officeNbr}</li>
                        </ul>
                    </div>
                </div>
                
                <div class='col-lg-4 col-md-6 col-sm-12 p-3'>
                    <div class='card bg-light' id='eng-card'>
                        <div class='card-header'>
                            <h2 class='text-light'>${answers.engName}</h1>
                            <h3 class='text-light'>Engineer</h2>
                        </div>
                        <ul class='list-group p-3'>
                            <li class='list-group-item'>ID: ${answers.engId}</li>                       
                            <li class='list-group-item'><a href="mailto: ${answers.engEmail}" target="_blank">Email: </a></li>
                            <li class='list-group-item'><a href="https://github.com/${answers.github}" target="_blank">GitHub: </a></li>
                        </ul>
                    </div>    
                </div>
            
                <div class='col-lg-4 col-md-6 col-sm-12 p-3'> 
                    <div class='card bg-light' id='int-card'>
                        <div class='card-header'>
                            <h2 class='text-light'>${answers.intName}</h1>
                            <h3 class='text-light'>Intern</h2>
                        </div>
                        <ul class='list-group p-3'>
                            <li class='list-group-item'>ID: ${answers.intId}</li>
                            <li class='list-group-item'><a href="mailto: ${answers.intEmail}" target="_blank">Email: </a></li>
                            <li class='list-group-item'>School: ${answers.school}</li>
                        </ul>
                    </div>     
                </div>
            </div>
        </div>
    
    </body>
    </html>`;

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
    
.then((answers) => {
        if (answers.nextStep === 'Add an engineer')  {
            addEngineer();
        }else if (answers.nextStep === 'Add an intern') {
            addIntern();
        }else {
            const htmlContent = generateHtml(answers);
                
            fs.writeFile('index.html', htmlContent, (err) =>
            err ? console.log(err) : console.log('\nTeam building is completed and an HTML file will be created')
            );
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

        .then((answers) => {
            if (answers.nextStep === 'Add an engineer')  {
                addEngineer();
            }else if (answers.nextStep === 'Add an intern') {
                addIntern();
            }else {
                const htmlContent = generateHtml(answers);
                
                fs.writeFile('index.html', htmlContent, (err) =>
                err ? console.log(err) : console.log('\nTeam building is completed and an HTML file will be created')
                );
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

        .then((answers) => {
            if (answers.nextStep === 'Add an engineer')  {
                addEngineer();
            }else if (answers.nextStep === 'Add an intern') {
                addIntern();
            }else {
                const htmlContent = generateHtml(answers);
                
                fs.writeFile('index.html', htmlContent, (err) =>
                err ? console.log(err) : console.log('\nTeam building is completed and an HTML file will be created')
                );
            }         
        });
    };











    
    

