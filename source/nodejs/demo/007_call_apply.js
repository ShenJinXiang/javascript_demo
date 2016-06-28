var pet = {
	words : '...',
	speak : function(say) {
		console.log(say + " " + this.words);
	}
}

pet.speak('pet');
console.log("------------------");
var dog = {
	words: 'wang'
}
pet.speak.call(dog, 'SPEAK');
