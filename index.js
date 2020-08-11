const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title:'
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Description:'
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'Installation:'
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:'
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'License:',
        choices: [
          'GNU GPLv3',
          'GNU GPLv2',
          'Apache 2.0',
          'BSD 3-Clause',
          'BSD 2-Clause',
          'MIT'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:'
    }
];

function promptUser() {
    return inquirer.prompt(questions);
}

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
function init() {
    promptUser()
    .then(function(answers) {
        const md = generateMarkdown(answers);
    
        return writeFileAsync('README.md', md);
      })
      .then(function() {
        console.log('Your README has been made!');
      })
      .catch(function(err) {
        console.log(err);
      });
}

// function call to initialize program
init();
