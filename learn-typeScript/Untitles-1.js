///< reference path="timetwo.ts"/>
var use = new emiee.useful;
console.log(use.timesTwo(9));
var namee;
(function (namee) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    namee.useful = useful;
})(namee || (namee = {}));
