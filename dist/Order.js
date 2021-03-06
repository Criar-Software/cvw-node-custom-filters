"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Order = /** @class */ (function () {
    function Order() {
        this.phrases = [
            {
                xmlKey: 'cProd',
                layoutValue: 'ref_prod'
            },
            {
                xmlKey: 'cEAN',
                layoutValue: 'cod_prod'
            },
            {
                xmlKey: 'xProd',
                layoutValue: 'desc_prod'
            },
            {
                xmlKey: 'infAdProd',
                layoutValue: 'infadprod'
            }
        ];
        this.itens = [];
    }
    Order.prototype.addItem = function (item) {
        this.itens.push(item);
    };
    Order.prototype.getItems = function () {
        return this.itens;
    };
    Order.prototype.getDataByLayout = function (layout) {
        var _this = this;
        var data = [];
        this.itens.map(function (value) {
            var newProductData = {
                nItem: value.nItem,
                data: []
            };
            layout.forEach(function (element) {
                var newExpression = "";
                _this.phrases.forEach(function (phrase) {
                    if (new RegExp(phrase.layoutValue).test(element.expression)) {
                        switch (phrase.layoutValue) {
                            case 'ref_prod':
                                newExpression = _this.replaceAll(element.expression, phrase.layoutValue, "'" + value.cProd + "'");
                                break;
                            case 'cod_prod':
                                newExpression = _this.replaceAll(element.expression, phrase.layoutValue, "'" + value.cEAN + "'");
                                break;
                            case 'desc_prod':
                                newExpression = _this.replaceAll(element.expression, phrase.layoutValue, "'" + value.xProd + "'");
                                break;
                            case 'infadprod':
                                newExpression = _this.replaceAll(element.expression, phrase.layoutValue, value.infAdProd ? "'" + value.infAdProd + "'" : "''");
                                break;
                            default:
                                break;
                        }
                    }
                });
                var interpreter = new index_1.Interpreter();
                var newValue = interpreter.getAttributeRuleByExpression(newExpression);
                var newAttributeData = {
                    attribute: element.name,
                    layoutExpression: element.expression,
                    expression: newExpression,
                    value: newValue
                };
                newProductData.data.push(newAttributeData);
            });
            data.push(newProductData);
        });
        return data;
    };
    Order.prototype.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    return Order;
}());
exports.default = Order;
