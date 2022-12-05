"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
// import xml2js from 'xml2js'
// import fs from 'fs'
var Order_1 = __importDefault(require("./Order"));
var lodash_1 = __importDefault(require("lodash"));
var Interpreter = /** @class */ (function () {
    function Interpreter() {
        this.words = ['If', 'Long', 'and', 'or', 'Trim', 'Len', 'Mid', 'f_mid', 'Left', 'Right', 'Pos', 'f_pos', 'LastPos', 'Upper', 'Lower', 'Case', 'f_global_replace', 'f_count_string', 'When', 'Then', 'Else'];
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
        this.order = new Order_1.default();
        this.json = {};
        this.data = {};
    }
    // TODO: Resolver para usar no front
    // readXml(pathName: string ) {
    //   const xml = fs.readFileSync(pathName)
    //   // monta o Json
    //   xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
    //     if (err) {
    //       throw err;
    //     }
    //     // find array of products on xml
    //     const arrProd = result.nfeProc.NFe[0].infNFe[0].det
    //     arrProd.forEach((element: any) => {
    //       // insert new Product in to Order
    //       let item = new Item(
    //         element.nItem[0], 
    //         element.prod[0].cProd[0],
    //         element.prod[0].cEAN[0], 
    //         element.prod[0].xProd[0], 
    //         element.infAdProd ? element.infAdProd[0] : undefined
    //       )
    //       this.order.addItem(item)
    //     });
    //     this.json = result
    //   })
    // }
    Interpreter.prototype.sumTest = function (a, b) {
        return a + b;
    };
    Interpreter.prototype.getData = function (layout) {
        var itens = this.order.getDataByLayout(layout);
        // console.log(inspect(itens, false, null, true /* enable colors */))
        return itens;
    };
    Interpreter.prototype.getJson = function () {
        return this.json;
    };
    Interpreter.prototype.getAttributeRuleByExpression = function (expression) {
        expression = this.readExpression(expression);
        return eval(expression);
    };
    Interpreter.prototype.readExpression = function (expression) {
        var _this = this;
        this.words.forEach(function (word) {
            if (new RegExp(word).test(expression)) {
                switch (word) {
                    case 'If':
                        expression = _this.replaceAll(expression, 'If', 'this.If');
                        break;
                    case 'Trim':
                        expression = _this.replaceAll(expression, 'Trim', 'this.Trim');
                        break;
                    case 'Len':
                        expression = _this.replaceAll(expression, 'Len', 'this.Len');
                        break;
                    case 'Mid':
                        expression = _this.replaceAll(expression, 'Mid', 'this.Mid');
                        break;
                    case 'f_mid':
                        expression = _this.replaceAll(expression, 'f_mid', 'this.f_mid');
                        break;
                    case 'Left':
                        expression = _this.replaceAll(expression, 'Left', 'this.Left');
                        break;
                    case 'Right':
                        expression = _this.replaceAll(expression, 'Right', 'this.Right');
                        break;
                    case 'Pos':
                        expression = _this.replaceAll(expression, 'Pos', 'this.Pos');
                        break;
                    case 'f_pos':
                        expression = _this.replaceAll(expression, 'f_pos', 'this.f_pos');
                        break;
                    case 'LastPos':
                        expression = _this.replaceAll(expression, 'LastPos', 'this.LastPos');
                        break;
                    case 'Upper':
                        expression = _this.replaceAll(expression, 'Upper', 'this.Upper');
                        break;
                    case 'Lower':
                        expression = _this.replaceAll(expression, 'Lower', 'this.Lower');
                        break;
                    case 'Case':
                        expression = _this.replaceAll(expression, 'Case', 'this.Case');
                        break;
                    case 'When':
                        expression = _this.replaceAll(expression, 'When', '');
                        break;
                    case 'Then':
                        expression = _this.replaceAll(expression, 'Then', 'return');
                        break;
                    case 'Else':
                        expression = _this.replaceAll(expression, 'Then', 'return');
                        break;
                    case 'f_global_replace':
                        expression = _this.replaceAll(expression, 'f_global_replace', 'this.f_global_replace');
                        break;
                    case 'f_count_string':
                        expression = _this.replaceAll(expression, 'f_count_string', 'this.f_count_string');
                        break;
                    case 'and':
                        expression = _this.replaceAll(expression, 'and', '&&');
                        break;
                    case 'f_count_string':
                        expression = _this.replaceAll(expression, 'or', '||');
                        break;
                    case 'Long':
                        expression = _this.replaceAll(expression, 'Long', 'this.Long');
                        break;
                    default:
                        break;
                }
            }
        });
        return expression;
    };
    Interpreter.prototype.If = function (expression, ifTrue, ifFalse) {
        if (expression) {
            return ifTrue;
        }
        else {
            return ifFalse;
        }
    };
    Interpreter.prototype.Trim = function (str) {
        return str.trim();
    };
    Interpreter.prototype.Lem = function (str) {
        return str.length;
    };
    Interpreter.prototype.Mid = function (str, from, length) {
        if (!length) {
            return str.substr(from);
        }
        else {
            return str.substr(from - 1, length + 1);
        }
    };
    Interpreter.prototype.f_mid = function (str, from, length) {
        return str.substring(from, length);
    };
    Interpreter.prototype.Left = function (str, qtd) {
        return str.substring(0, qtd);
    };
    Interpreter.prototype.Right = function (str, qtd) {
        return str.substring(qtd, str.length);
    };
    Interpreter.prototype.Pos = function (str, searchString, position) {
        return str.indexOf(searchString, position);
    };
    Interpreter.prototype.f_pos = function (str, searchString, occurrence) {
        var pos = str.indexOf(searchString);
        for (var index = 1; index < occurrence; index++) {
            pos = str.indexOf(searchString, pos);
        }
        return pos + searchString.length - 1;
    };
    Interpreter.prototype.LastPos = function (str, searchString) {
        return str.lastIndexOf(searchString) + 1;
    };
    Interpreter.prototype.Upper = function (str) {
        return str.toUpperCase();
    };
    Interpreter.prototype.Lower = function (str) {
        return str.toLowerCase();
    };
    Interpreter.prototype.Long = function (str) {
        var toNumber = Number(str);
        if (!lodash_1.default.isNaN(toNumber)) {
            return toNumber;
        }
        else {
            return str;
        }
    };
    Interpreter.prototype.Case = function (expression) {
        var exp = expression.split('When', 1);
        var exp1 = exp[0];
        var newExp = "if (" + eval(this.readExpression(exp1)) + ") " + exp[1];
        return eval(this.readExpression(newExp));
    };
    Interpreter.prototype.f_global_replace = function (str, searchString, replaceString) {
        return str.replace(searchString, replaceString);
    };
    Interpreter.prototype.f_count_string = function (str, searchString) {
        var arr = str.split(searchString);
        return arr.length - 1;
    };
    Interpreter.prototype.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    return Interpreter;
}());
exports.Interpreter = Interpreter;
