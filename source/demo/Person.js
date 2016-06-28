var _name = 'name';
var _age = 0;
var _address = 'taiyuan';

exports.setName = function(name) {
	_name = name;
};

exports.setAge = function(age) {
	_age = age;
};

exports.setAddress = function(address) {
	_address = address;
};

exports.getName = function() {
	return _name;
};

exports.getAge = function() {
	return _age;
};

exports.getAddress = function() {
	return _address;
};

exports.say = function() {
	return "name: " + _name + "  age : " + _age + "  address : " + _address;
};
