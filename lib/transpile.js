var typescript = require('typescript');
var Observable = require('rx').Observable;

module.exports = function tsTranspile(input, compilerOptions, fileName, diagnostics) {
	return Observable.create(function(observer) {
		var output;
		try{
			console.log(input);
			output = typescript.transpile(input, compilerOptions, fileName, diagnostics);
		} catch (err) {
			observer.onError(err);
		}
		observer.onNext(output);
		observer.onCompleted();
	});
};