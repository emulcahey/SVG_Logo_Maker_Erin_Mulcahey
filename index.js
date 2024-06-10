//file the user will run
var inquirer = require('inquirer');
var fs = require('fs');
// var shapes = require('./shapes.js');
var circle = require('./lib/circle.js');
var square = require('./lib/square.js');
var triangle = require('./lib/triangle.js');


// TODO: Create an array of questions for user input
// each question should have a name, message, and response, also added tips for each question
const questions = [{
    name: 'shape',
    message: 'What shape would you like to use? (Tip: Shape may decide letter placement.)',
    type: 'list',
    choices: ['Circle', 'Square', 'Triangle']
    }, {
    name: 'shapeColor',
    message: 'What do you want the color of the shape to be? (Tip: Choose a color keyword OR hexadecimal code that includes the # symbol.)',
    response: 'string'
    }, {
    name: 'text',
    message: 'What three characters do you want your logo to show? (Tip: Enter up to three characters - spaces count.)',
    response: 'string'
    }, {
    name: 'textColor',
    message: 'What do you want the color of your characters to be? (Tip: choose a color keyword OR hexadecimal code that includes the # symbol.)',
    response: 'string'
    }];

//new logo object
function logo (response) {
    let logoshape = response.shape;
    switch (logoshape) {
        case 'Circle':
            return circle.generateCircle(response);
        case 'Square':
            return square.generateSquare(response);
        case 'Triangle':
            return triangle.generateTriangle(response);
    }
};

// TODO: Create a function to write svg file
// the function will write the file to the 'develop' folder with the file name 'logo.svg' and the data passed in
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log(`Generated logo.svg`);
    });
}

// TODO: Create a function to initialize app
// the function will prompt the user with the questions array, and then log the answers to the console
// then the function will call the writeToFile function with the file name 'logo.svg' and the generateMarkdown function with the answers
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('logo.svg', logo(answers));
    });
}

// Function call to initialize app
init();