"use strict";
exports.__esModule = true;
exports.Just = void 0;
var Just = function (x) { return ({
    unit: function () { return x; },
    "typeof": function () { return "Just<".concat(typeof x, ">"); },
    bind: function (f) { return f(x); },
    map: function (f) { return (0, exports.Just)(f(x)); },
    pipe: function () {
        var functions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            functions[_i] = arguments[_i];
        }
        return (0, exports.Just)(functions.reduce(function (prev, current) { return current(prev); }, x));
    }
}); };
exports.Just = Just;
