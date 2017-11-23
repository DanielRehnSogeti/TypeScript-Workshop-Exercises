//Exercise 2 - Shape up!

interface IShape {
    color : string;
    area() : number;
    toString() : string;
}

class Circle implements IShape {
    constructor(public radius : number, public color : string) {}

    public area() : number {
        return this.radius * this.radius * Math.PI;
    }

    public toString() : string {
        return `Circle - ${this.area()} - ${this.color}`;
    }
}

class Rectangle implements IShape {
    constructor(public width : number, public height : number, public color : string) {}

    public area() : number {
        return this.width * this.height;
    }

    public toString() : string {
        return `Rectangle - ${this.area()} - ${this.color}`;
    }
}

let circle = new Circle(2, 'red');
let rectangle = new Rectangle(3, 5, 'blue');

alert(circle.toString() + '\n' + rectangle.toString());