function Box1() {

}

Box1.prototype.name = 'wpf';
var box1 = new Box1();

function Box2() {
}
var o1 = {
	name: 'wpf'
}
Box2.prototype = Object.create(null);

var box2 = new Box2();

console.log(box1.constructor == Box1);
console.log(box2.constructor == Box2);

console.log(Box1.prototype.constructor == Box1);
console.log(Box2.prototype.constructor == Box2);

console.log("---")
console.log('constructor' in Box1.prototype)
console.log('constructor' in Box2.prototype)

function F() {}
console.log("---")
console.log(F.prototype.constructor == F)
