// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'title',
        message: 'What do you want your title to be?',
        name: 'title',
      },
      {
        type: 'description',
        message: 'Decribe your project.',
        name: 'description',
      },
      {
        type: 'Installation',
        message: 'Explain how to install your application.',
        name: 'Installation',
      },
      {
        type: 'Usage',
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
        type: 'Contributing',
        message: 'Contribution guidelines.',
        name: 'Contributing',
      },
      {
        type: 'Tests',
        message: 'How should the user test this application?',
        name: 'Tests',
      },
      {
        type: 'github',
        message: 'What is your GitHub username?',
        name: 'Github',
      },
      {
        type: 'email',
        message: 'What is your email?',
        name: 'email',
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