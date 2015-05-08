var assert = require('assert');
var fs = require('fs');
var transpileFile = require('../').transpileFile;

describe('transpileFile', function() {
	it('should be a function', function(){
		assert.equal(typeof transpileFile, 'function');
	});
	
	it('should transpile file', function(done){
		transpileFile('fixtures/FooClass.ts').subscribe(function(result) {
			assert.equal(result, fs.readFileSync('fixtures/FooClass.js', { encoding: 'utf8' }));
			done();
		});
	});
});