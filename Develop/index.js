// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
 // project title
 {
    name: 'title',
    type: 'input',
    message: 'What is the title of your project?',
  },
  // description
  {
    name: 'description',
    type: 'input',
    message: 'Provide a short description explaining the what, why, and how of your project.',
  },
// installation
  {
    name: 'installation',
    type: 'input',
    message: 'Describe the installation instructions for your project.',
  },
// usage info
  {
    name: 'usage',
    type: 'input',
    message: 'What is the usage of your project?',
  },
  // contribution
  {
    name: 'contribution',
    type: 'input',
    message: ':List any collaborators of your project.',
  },
// test instructions
{
    name: 'test',
    type: 'input',
    message: 'Include any test you have done for your project.',
  },
  // license badge
  {
    name: 'license',
    type: 'list',
    message: 'Pick an appropriate license for your project.',
    choices: [
    'Apache',
    'GNU GPLv3',
    'MIT',
    'None'],
  },
  // GitHub username
  {
    name: 'github',
    type: 'input',
    message: 'Please enter your GitHub username.',
  },
  // email
  {
    name: 'email',
    type: 'input',
    message: 'Please enter your email.',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

init();