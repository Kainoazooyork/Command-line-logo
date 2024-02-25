const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const setShape = require('./lib/setShape.js')

// Function to create SVG file using inquire response

function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated createLogo.svg'));
}

// Function to initialize, ask questions, and catch errors

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(responese);
    })
    .catch(err => {
        console.log(err)
    });
}

init();