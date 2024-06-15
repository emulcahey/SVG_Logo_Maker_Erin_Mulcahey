//file the user will run
var inquirer = require('inquirer');
var fs = require('fs');
var circle = require('./lib/circle.js');
var square = require('./lib/square.js');
var triangle = require('./lib/triangle.js');


//An array of questions for user input
// each question has a name, message, and response, also added tips for each question
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
    message: 'What three characters do you want your logo to show? (Tip: Enter up to three characters -spaces count as characters.)',
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
            return circle.circle.generateCircle(response);
        case 'Square':
            return square.square.generateSquare(response);
        case 'Triangle':
            return triangle.triangle.generateTriangle(response);
    }
};

// Function to write svg file
// the function will write the file to the main repository folder with the file name 'logo.svg'.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log(`Generated logo.svg`);
    });
}

// function will initialize app
// the function will prompt the user with the questions array, and then log the answers to the console
// then the function will call the writeToFile function with the file name 'logo.svg' and the logo function with the answers
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('logo.svg', logo(answers));
    });
}

// Function call to initialize app
init();