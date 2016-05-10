function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.setName = function(name) {
	this.name = name;
}
Person.prototype.getName = function() {
	return this.name;
}
Person.prototype.setAge = function(age) {
	this.age = age;
}
Person.prototype.getAge = function() {
	return this.age;
}

var p1 = new Person('张三', 18);
var n = p1.getName();
console.log(n);
console.log(p1.name);
