//child of shapes.js file

//object to generate circle svg
const circle = {
    //function to generate circle svg
    generateCircle: function (data) {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="transparent" />
            <circle cx="150" cy="100" r="85" fill="${data.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
        </svg>`;
    }
};

//test to check if the circle object is defined
class CircleObject {
    constructor() {
    }
    setColor(color) {
        this.color = color;
    }
}

CircleObject.prototype.render = function (data) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="transparent" />
    <circle cx="150" cy="100" r="85" fill="${data.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`;
}

//export circle object
module.exports = {
    circle, CircleObject
}