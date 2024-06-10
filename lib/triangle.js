//child of shapes.js file
//object to triangle svg
const triangle = {
    //function to generate triangle svg
    generateTriangle: function (color) {
        return `
        <svg height="200" width="200">
            <polygon points="100,10 40,198 190,78 10,78 160,198" fill="${color}" />
        </svg>`;
    }
};

//


//export triangle object
module.exports = triangle;