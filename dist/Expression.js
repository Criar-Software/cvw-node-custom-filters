"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Expression = /** @class */ (function () {
    function Expression() {
        this.functions = [];
    }
    Expression.prototype.addFunction = function (func) {
        this.functions.push(func);
    };
    return Expression;
}());
exports.default = Expression;
