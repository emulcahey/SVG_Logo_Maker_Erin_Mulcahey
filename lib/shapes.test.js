// var jest = require('jest');
var TriangleObject = require('./triangle.js').TriangleObject;
var SquareObject = require('./square.js').SquareObject;
var CircleObject = require('./circle.js').CircleObject;
// const { Square, Triangle, Circle } = require('./shapes');


describe("ShapeTests", () => {
    //tests to check if the triangle object is defined
    test("should render colored polygon", () => {
        const picture = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        const shape = new TriangleObject();
        shape.setColor("blue");
        const result = shape.render({ shapeColor: "blue" });
        expect(result).toContain(picture);
    });

    test("should render colored font", () => {
        const letters = '<text x="150" y="170" font-size="60" text-anchor="middle" fill="white">SVG</text>';
        const text = new TriangleObject();
        text.setColor("white");
        const threeLetters = "SVG";
        const result = text.render({ textColor: "white", text: threeLetters});
        expect(result).toContain(letters);
    });

    //tests to check if the square object is defined
    test("should render colored rectangle", () => {
        const picture = '<rect x="60" y="10" width="180" height="180" fill="green"/>';
        const shape = new SquareObject();
        shape.setColor("green");
        const result = shape.render({ shapeColor: "green" });
        expect(result).toContain(picture);
    });

    test("should render colored font", () => {
        const letters = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>';
        const text = new SquareObject();
        text.setColor("white");
        const threeLetters = "SVG";
        const result = text.render({ textColor: "white", text: threeLetters});
        expect(result).toContain(letters);
    });

    //tests to check if the circle object is defined
    test("should render colored circle", () => {
        const picture = '<circle cx="150" cy="100" r="85" fill="green"/>';
        const shape = new CircleObject();
        shape.setColor("green");
        const result = shape.render({ shapeColor: "green" });
        expect(result).toContain(picture);
    });

    test("should render colored font", () => {
        const letters = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>';
        const text = new CircleObject();
        text.setColor("white");
        const threeLetters = "SVG";
        const result = text.render({ textColor: "white", text: threeLetters});
        expect(result).toContain(letters);
    });
})