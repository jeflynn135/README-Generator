// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What do you want your title to be?',
        name: 'Title',
      },
      {
        type: 'input',
        message: 'Decribe your project.',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'Explain how to install your application.',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'What is your usage information?',
        name: 'Usage',
      },
      {
        type: 'list',
        message: 'Choose a license.',
        name: 'License',
        choices: ['mit', 'apache', 'none']
      },
      {
        type: 'input',
        message: 'Contribution guidelines.',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'How should the user test this application?',
        name: 'Tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Github',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
      },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err? console.log (err): console.log ('success')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
.then((response) => {
   console.log (response)
   const data = generateMarkdown(response)
writeToFile ('./generatedREADME.md', data)
});
}

// Function call to initialize app
init();






//  Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions