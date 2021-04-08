const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const questions = [
    {
        type: 'input',
        message: "What is the team member's name?",
        name: 'name',
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
];

// ??? need to add mgr, eng, intern questions


// ??? function to write html, init app, call to init app??
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('index.html', Employee({...answers}))
    })
}

init();









    
    

