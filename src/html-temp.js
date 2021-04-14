const createTeam = team => {
    const generateMgr = manager => {
        return `
        <div class='col-lg-4 col-md-6 col-sm-12 p-3'>
            <div class='card bg-light' id='mgr-card'>
                <div class='card-header'>
                    <h2 class='text-light'>${manager.getName()}</h1>
                    <h3 class='text-light'>${manager.getRole()}</h2>
                </div>
                <ul class='list-group p-3'>
                    <li class='list-group-item'>ID: ${manager.getId()}</li>
                    <li class='list-group-item'>Email: <a href="mailto: ${manager.getEmail()}" target="_blank">${manager.getEmail()}</a></li>
                    <li class='list-group-item'>Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`;
    };

    const generateEng = engineer => {
        return `
        <div class='col-lg-4 col-md-6 col-sm-12 p-3'>
            <div class='card bg-light' id='eng-card'>
                <div class='card-header'>
                    <h2 class='text-light'>${engineer.getName()}</h1>
                    <h3 class='text-light'>${engineer.getRole()}</h2>
                </div>
                <ul class='list-group p-3'>
                    <li class='list-group-item'>ID: ${engineer.getId()}</li>                       
                    <li class='list-group-item'>Email: <a href="mailto: ${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a></li>
                    <li class='list-group-item'>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`;
    };

    const generateInt = intern => {
        return `
        <div class='col-lg-4 col-md-6 col-sm-12 p-3'>
            <div class='card bg-light' id='int-card'>
                <div class='card-header'>
                    <h2 class='text-light'>${intern.getName()}</h1>
                    <h3 class='text-light'>Intern</h2>
                </div>
                <ul class='list-group p-3'>
                    <li class='list-group-item'>ID: ${intern.getId()}</li>
                    <li class='list-group-item'>Email: <a href="mailto: ${intern.getEmail()}" target="_blank">${intern.getEmail()}</a></li>
                    <li class='list-group-item'>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateMgr(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEng(engineer))
        .join('')
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateInt(intern))
        .join('')
    );

    return html.join('');

}

module.exports = team => {
    return `
    <!DOCTYPE html>
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
    
        <div class='container'>
            <div class='row justify-content-evenly p-3'>
                ${createTeam(team)}
            </div>
        </div>
    
    </body>
    </html>`;
        };