//Exercise 2 - Shape up!
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.area = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "Circle - " + this.area() + " - " + this.color;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle - " + this.area() + " - " + this.color;
    };
    return Rectangle;
}());
var circle = new Circle(2, 'red');
var rectangle = new Rectangle(3, 5, 'blue');
alert(circle.toString() + '\n' + rectangle.toString());
