//child of shapes.js file

//object to triangle svg
const triangle = {
    //function to generate triangle svg
    generateTriangle: function (data) {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="transparent" />
            <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
            <text x="150" y="170" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </svg>`;
    }
};

//test to check if the triangle object is defined
class TriangleObject {
    constructor() {
    }
    setColor(color) {
        this.color = color;
    }
}

TriangleObject.prototype.render = function (data) { 
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="transparent" />
        <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`;
}

//export triangle object
module.exports = {
    triangle, TriangleObject
}