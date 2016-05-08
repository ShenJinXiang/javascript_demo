// Person.js
(function(){
	function Person(name) {
		this.name = name;
	}

	Person.prototype.setName = function(name) {
		this.name = name;
		return this;
	};

	Person.prototype.getName = function() {
		return this.name;
	};

	Person.prototype.setAge = function(age) {
		this.age = age;
		return this;
	};

	Person.prototype.getAge = function() {
		return this.age;
	};

	Person.prototype.setAddress = function(address) {
		this.address = address;
		return this;
	};

	Person.prototype.getAddress = function() {
		return this.address;
	};

	Person.prototype.log = function() {
		console.log("name: " + this.getName() + "\tage: " + this.getAge() + "\taddress: " + this.getAddress());
		return this;
	};

	function test() {
		var p1 = new Person();
		p1.log();
		p1.setName("张三").setAge(14).setAddress("北京").log().setAge(18).log();
	}

	test();
}());
