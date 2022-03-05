"use strict";
exports.__esModule = true;
exports.Nothing = void 0;
var Nothing = function (err) { return ({
    unit: function () { return (0, exports.Nothing)(err); },
    bind: function (f) { return (0, exports.Nothing)(err); },
    "typeof": function () { return 'Nothing'; },
    error: function () { return err; },
    pipe: function () {
        var functions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            functions[_i] = arguments[_i];
        }
        return (0, exports.Nothing)(err);
    }
}); };
exports.Nothing = Nothing;
