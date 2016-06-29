var fs = require('fs');

fs.readFile('012_readfile.js', 'utf-8', function(err, data){
	if(err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
console.log('end.');
