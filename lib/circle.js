//child of shapes.js file

//object to generate circle svg
const circle = {
    //function to generate circle svg
    generateCircle: function (color) {
        return `
        <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${color}" />
        </svg>`;
    }
};

//export circle object
module.exports = circle;