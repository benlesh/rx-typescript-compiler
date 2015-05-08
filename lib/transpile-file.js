var transpile = require('./transpile');
var fs = require('fs');
var rx = require('rx');

var Observable = rx.Observable;
var SingleAssignmentDisposable = rx.SingleAssignmentDisposable;

module.exports = function transpileFile(filename, options, diagnostics) {
	return Observable.create(function(observer) {
		var disposable = new SingleAssignmentDisposable();
		fs.readFile(filename, { encoding: 'utf8' }, function(err, data) {
			if(err) {
				observer.onError(err);
			} else {
				disposable.setDisposable(transpile(data, options, filename, diagnostics).subscribe(observer));
			}
		});
		return disposable;
	});	
};