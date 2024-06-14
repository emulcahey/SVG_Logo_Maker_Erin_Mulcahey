//child of shapes.js file

//object to generate square svg
const square = {
    //function to generate square svg
    generateSquare: function (data) {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="transparent" />
            <rect x="60" y="10" width="180" height="180" fill="${data.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </svg>`;
    }
};

//test to check if the square object is defined
class SquareObject {
    constructor() {
    }
    setColor(color) {
        this.color = color;
    }
}

SquareObject.prototype.render = function (data) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent" />
    <rect x="60" y="10" width="180" height="180" fill="${data.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`;
}

//export square object
module.exports = {
    square, SquareObject
}