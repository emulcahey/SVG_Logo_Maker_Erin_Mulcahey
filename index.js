//file the user will run
var inquirer = require('inquirer');
var fs = require('fs');
var shapes = require('./shapes.js');
var circle = require('./circle.js');
var square = require('./square.js');
var triangle = require('./triangle.js');


// TODO: Create an array of questions for user input
// each question should have a name, message, and response, also added tips for each question
const questions = [{
    }, {
    name: 'shape',
    message: 'What shape would you like to use? (Tip: Shape may decide letter placement.)',
    type: 'list',
    choices: ['Circle', 'Square', 'Triangle']
    }, {
    name: 'shapeColor',
    message: 'What do you want the color of the shape to be? (Tip: Pick a contrasting color to the color you want for the text.)',
    response: 'string'
    }, {
    name: 'text',
    message: 'What three characters do you want your logo to show? (Tip: Enter up to three characters - spaces count.)',
    response: 'string'
    }, {
    name: 'textColor',
    message: 'What do you want the color of your characters to be? (Tip: Pick a contrasting color to the color you picked for your shape.)',
    response: 'string'
    }];

//new logo object
var logo = {
    //function to generate logo
    generateLogo: function (shape, shapeColor, text, textColor) {
        //switch statement to determine which shape to generate
        switch (shape) {
            case 'Circle':
                return circle.generateCircle(shapeColor) + shapes.generateSVG(text, textColor);
            case 'Square':
                return square.generateSquare(shapeColor) + shapes.generateSVG(text, textColor);
            case 'Triangle':
                return triangle.generateTriangle(shapeColor) + shapes.generateSVG(text, textColor);
        }
    }
};

);




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
        writeToFile('logo.svg', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();