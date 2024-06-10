//parent js file to square, circle, and triange js files

var index = require('./index.js');
var triangle = require('./triangle.js');
var circle = require('./circle.js');
var square = require('./square.js');

//object to generate svg
const shapes = {
    //function to generate svg
    generateSVG: function (shape, color) {
        //switch statement to determine which shape to generate
        switch (shape) {
            case 'Circle':
                return circle.generateCircle(color);
            case 'Square':
                return square.generateSquare(color);
            case 'Triangle':
                return triangle.generateTriangle(color);
        }
    }
};

//export shapes object
module.exports = shapes;
