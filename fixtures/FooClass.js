var BarClass_ts_1 = require('./BarClass.ts');
var FooClass = (function () {
    function FooClass() {
    }
    FooClass.prototype.getBar = function () {
        return new BarClass_ts_1.default();
    };
    return FooClass;
})();
exports.default = FooClass;
