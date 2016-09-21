const app = "I don't do much."

function Shape(sides, x, y){
	this.sides = sides;
	this.x = x;
	this.y = y;
}
function Quadrilateral(x,y, oneLength, twoLength, threeLength, fourLength){
	Shape.call(this, 4, x, y);  //call on the superclass
	this.oneLength = oneLength;
	this.twoLength = twoLength;
	this.threeLength = threeLength;
	this.fourLength = fourLength;
}

Quadrilateral.prototype = Object.create(Shape.prototype)
Quadrilateral.prototype.constructor = Quadrilateral;

Quadrilateral.prototype.perimeter = function() {
return this.oneLength + this.twoLength + this.threeLength + this.fourLength
}

};
