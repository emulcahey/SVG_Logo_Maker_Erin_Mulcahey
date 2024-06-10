//square js file
//child of shapes.js file
//object to generate square svg
const square = {
    //function to generate square svg
    generateSquare: function (color) {
        return `
        <svg height="100" width="100">
            <rect width="100" height="100" stroke="black" stroke-width="3" fill="${color}" />
        </svg>`;
    }
};
//export square object
module.exports = square;