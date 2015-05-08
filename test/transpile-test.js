var assert = require('assert');
var transpile = require('../').transpile;

describe('transpile', function(){
	it('should be a function', function() {
		assert.equal(typeof transpile, 'function');
	});
	
	it('should compile something', function(done){
		var results = transpile('let foo = "bar";').subscribe(function(results) {
			assert.equal(results, 'var foo = "bar";\n');
			done();
		});
	});
});