// Include packages and files required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// Create array to store multiple engineers
const allEngineers = [];
// Create array to store multiple interns
const allInterns = [];

// Create an array of questions for user input
const managerQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is the Team Manager's name?",
  },
  {
    type: 'number',
    name: 'managerId',
    message: "What is the Team Manager's employee id number?",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the Team Manager's email address?",
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: "What is the Team Manager's office number?",
  },
  {
    type: 'list',
    message: 'Do you want to add another team member?',
    name: 'menu',
    choices: ["Add Engineer", "Add Intern", "Finish"],
  },

];

const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerName',
    message: "What is the Engineer's name?",
  },
  {
    type: 'number',
    name: 'engineerId',
    message: "What is the Engineer's employee id number?",
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "What is the Engineer's email address?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the Engineer's GitHub username?",
  },
  {
    type: 'list',
    message: 'Do you want to add another team member?',
    name: 'menu',
    choices: ["Add Engineer", "Add Intern", "Finish"],
  },

];

const internQuestions = [
  {
    type: 'input',
    name: 'internName',
    message: "What is the Intern's name?",
  },
  {
    type: 'number',
    name: 'internId',
    message: "What is the Intern's employee id number?",
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "What is the Intern's email address?",
  },
  {
    type: 'input',
    name: 'school',
    message: "What school does the Intern attend?",
  },
  {
    type: 'list',
    message: 'Do you want to add another team member?',
    name: 'menu',
    choices: ["Add Engineer", "Add Intern", "Finish"],
  },

];

// Create a function to initialize app
function init() {

  // Use inquirer to initiate question prompts
  inquirer
    .prompt(managerQuestions)

    // Gather input data and action menu selection
    .then((managerData) => {

      if (managerData.menu === "Add Engineer") {
        addEngineer(managerData);
      }
      else if (managerData.menu === "Add Intern") {
        addIntern(managerData);

      } else {
        renderAnswers(managerData, allEngineers, allInterns);
      }
    });
}

function addEngineer(managerData, engineerData, internData) {

  // Use inquirer to initiate question prompts
  inquirer
    .prompt(engineerQuestions)

    // Gather input data and action menu selection
    .then((engineerData) => {

      const engineers = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.github);
      allEngineers.push(engineers);

      if (engineerData.menu === "Add Engineer") {
        addEngineer(managerData, allEngineers, allInterns);
      }
      else if (engineerData.menu === "Add Intern") {
        addIntern(managerData, allEngineers, allInterns);
      } else {

        renderAnswers(managerData, allEngineers, allInterns);
      }
    });
}

function addIntern(managerData, engineerData, internData) {

  // Use inquirer to initiate question prompts
  inquirer
    .prompt(internQuestions)

    // Gather input data and action menu selection
    .then((internData) => {

      const interns = new Intern(internData.internName, internData.internId, internData.internEmail, internData.school);
      allInterns.push(interns);

      if (internData.menu === "Add Engineer") {
        addEngineer(managerData, allEngineers, allInterns);
      }
      else if (internData.menu === "Add Intern") {
        addIntern(managerData, allEngineers, allInterns);
      } else {

        renderAnswers(managerData, allEngineers, allInterns);
      }
    });
}

// Create a function to initialize app
function renderAnswers(managerData, allEngineers, allInterns) {

  const htmlManagerContent = generateHtml(managerData, allEngineers, allInterns);

  fs.writeFile('./dist/output.html', htmlManagerContent, (err) =>
    err ? console.log(err) : console.log('Successfully created html output!')
  );
}
// Function call to initialize app
init();
