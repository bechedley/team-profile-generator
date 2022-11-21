// Include packages and files required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml  = require('./generateHtml');

// Create an array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Team Manager's name?",
      },
      {
        type: 'number',
        name: 'id',
        message: "What is the Team Manager's employee id number?",
      },
      {
        type: 'input',
        name: 'email',
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
        name: 'name',
        message: "What is the Engineer's name?",
      },
      {
        type: 'number',
        name: 'id',
        message: "What is the Engineer's employee id number?",
      },
      {
        type: 'input',
        name: 'email',
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

const InternQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
      },
      {
        type: 'number',
        name: 'id',
        message: "What is the Intern's employee id number?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email address?",
      },
      {
        type: 'input',
        name: 'github',
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
    .then((data) => {
        if (data.menu === "Add Engineer") {
            addEngineer();
        }
         else if (data.menu === "Add Intern") {
            addIntern();
        } else {
            return;
        }
    })
    // Gather input data and send to the write to file function
    .then((data) => {
        const htmlContent = generateHtml(data);
        
        fs.writeFile('index.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Successfully created html output!')
        );
    });
}

// Function to gather Engineer data
function addEngineer() {
    
    // Use inquirer to initiate question prompts
    inquirer
    .prompt(engineerQuestions)

    // Gather input data and action menu selection
    .then((data) => {
        if (data.menu === "Add Engineer") {
            addEngineer();
        }
         else if (data.menu === "Add Intern") {
            addIntern();
        } else {
            return;
        }
    })
    // Gather input data and send to the write to file function
    .then((data) => {
        const htmlContent = generateHtml(data);
        
        fs.writeFile('index.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Successfully created html output!')
        );
    });
}

function addIntern() {
    
    // Use inquirer to initiate question prompts
    inquirer
    .prompt(internQuestions)

    // Gather input data and action menu selection
    .then((data) => {
        if (data.menu === "Add Engineer") {
            addEngineer();
        }
         else if (data.menu === "Add Intern") {
            addIntern();
        } else {
            return;
        }
    })
    // Gather input data and send to the write to file function
    .then((data) => {
        const htmlContent = generateHtml(data);
        
        fs.writeFile('index.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Successfully created html output!')
        );
    });
}

// Function call to initialize app
init();
