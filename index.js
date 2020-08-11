const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title'
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
        name: 'questions',
        message: 'Questions:'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
