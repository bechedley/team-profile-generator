const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


function renderManager(managerData) {

    const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.officeNumber);

    return `<div class="col-3 card h-80 border-0">
    <div class="text-bg-info mb-3 text-center rounded-circle">
        <i class="bi-clipboard-data" style="font-size: 5rem; color: white;"></i>
    </div>
    <div class="card-body bg-light rounded">
        <h5 class="card-title text-center">${manager.name}</h5>
        <div class="card-header text-center">
            ${manager.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Employee ID:</b> ${manager.id}</li>
            <li class="list-group-item"><b>Email:</b> <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item"><b>Office Number</b> ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
    `;
}

function renderEngineer(newEngineer) {

    if (newEngineer) {

        const engineer = new Engineer(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github);


        return `<div class="col-3 card h-80 border-0">
    <div class="text-bg-info mb-3 text-center rounded-circle">
        <i class="bi-tools" style="font-size: 5rem; color: white;"></i>
    </div>
    <div class="card-body bg-light rounded">
        <h5 class="card-title text-center">${engineer.name}</h5>
        <div class="card-header text-center">
        ${engineer.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Employee ID:</b> ${engineer.id}</li>
            <li class="list-group-item"><b>Email:</b> <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item"><b>GitHub:</b> <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
    </div>
</div>
    `;

    } else {
        return ``;
    }
}

function renderIntern(newIntern) {


    if (newIntern) {

        const intern = new Intern(newIntern.name, newIntern.id, newIntern.email, newIntern.school);

        return `<div class="col-3 card h-80 border-0">
    <div class="text-bg-info mb-3 text-center rounded-circle">
        <i class="bi-mortarboard" style="font-size: 5rem; color: white;"></i>
    </div>
    <div class="card-body bg-light rounded">
        <h5 class="card-title text-center">${intern.name}</h5>
        <div class="card-header text-center">
        ${intern.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Employee ID:</b> ${intern.id}</li>
            <li class="list-group-item"><b>Email:</b> <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item"><b>School:</b> ${intern.school}</li>
        </ul>
    </div>
</div>
    `;
    } else {
        return ``;
    }
}

// Create a function to generate html output
function generateHtml(managerData, allEngineers, allInterns) {

    return `<!doctype html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Profile</title>
      <link href="/week-10/team-profile-generator/dist/style.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  
  <body>
  <nav class="navbar" style="background-color: #e3f2fd;">
      <div class="container-fluid justify-content-center text-center">
          <span class="navbar-brand mb-0 h1">
              <h1>TEAM PROFILE</h1>
          </span>
      </div>
  </nav>
  <div class="container-fluid">
      <div class="row align-content-center justify-content-center">
          
          ${renderManager(managerData)}
          
          ${allEngineers.map(renderEngineer)}

          ${allInterns.map(renderIntern)}
  
          </div>
      </div>
  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"></script>
  </body>
  
  </html>
  `;
}

module.exports = generateHtml;
