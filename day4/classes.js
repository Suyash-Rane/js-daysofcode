/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon
{
    constructor(a)
    {
        this.a = a;
    }
    perimeter()
    {
        var p = 0;
        for(var i = 0; i<this.a.length; i++)
        {
            p = p + this.a[i];
        }
        return p;
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());