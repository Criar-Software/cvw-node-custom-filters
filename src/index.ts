// import xml2js from 'xml2js'
// import fs from 'fs'
import Order from './Order'
// import Item from './Item'
import LayouItem from './interfaces/LayoutItem'
import { IInterpreter } from './interfaces/IInterpreter'
import _ from 'lodash'

export class Interpreter implements IInterpreter {
  json: {}
  data: {}
  words = ['If', 'Long', 'and', 'or', 'Trim', 'Len', 'Mid', 'f_mid', 'Left', 'Right', 'Pos', 'f_pos', 'LastPos', 'Upper', 'Lower', 'Case', 'f_global_replace', 'f_count_string', 'When', 'Then', 'Else']
  phrases = [
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
  ]
  order: Order

  constructor() {
    this.order = new Order()
    this.json = {}
    this.data = {}
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

  sumTest(a: number, b: number): number {
    return a + b
  }

  getData(layout: Array<LayouItem>): Object[] {
    let itens = this.order.getDataByLayout(layout)
    // console.log(inspect(itens, false, null, true /* enable colors */))
    return itens
  }

  getJson() {
    return this.json
  }

  getAttributeRuleByExpression(expression: string): any {
    expression = this.readExpression(expression)
    return eval(expression)
  }

  readExpression(expression: string): string {

    this.words.forEach((word: string | RegExp) => {
      if (new RegExp(word).test(expression)) {
        switch (word) {
          case 'If':
            expression = this.replaceAll(expression, 'If', 'this.If')
            break

          case 'Trim':
            expression = this.replaceAll(expression, 'Trim', 'this.Trim')
            break

          case 'Len':
            expression = this.replaceAll(expression, 'Len', 'this.Len')
            break

          case 'Mid':
            expression = this.replaceAll(expression, 'Mid', 'this.Mid')
            break

          case 'f_mid':
            expression = this.replaceAll(expression, 'f_mid', 'this.f_mid')
            break

          case 'Left':
            expression = this.replaceAll(expression, 'Left', 'this.Left')
            break

          case 'Right':
            expression = this.replaceAll(expression, 'Right', 'this.Right')
            break

          case 'Pos':
            expression = this.replaceAll(expression, 'Pos', 'this.Pos')
            break

          case 'f_pos':
            expression = this.replaceAll(expression, 'f_pos', 'this.f_pos')
            break

          case 'LastPos':
            expression = this.replaceAll(expression, 'LastPos', 'this.LastPos')
            break

          case 'Upper':
            expression = this.replaceAll(expression, 'Upper', 'this.Upper')
            break

          case 'Lower':
            expression = this.replaceAll(expression, 'Lower', 'this.Lower')
            break

          case 'Case':
            expression = this.replaceAll(expression, 'Case', 'this.Case')
            break

          case 'When':
            expression = this.replaceAll(expression, 'When', '')
            break

          case 'Then':
            expression = this.replaceAll(expression, 'Then', 'return')
            break

          case 'Else':
            expression = this.replaceAll(expression, 'Then', 'return')
            break

          case 'f_global_replace':
            expression = this.replaceAll(expression, 'f_global_replace', 'this.f_global_replace')
            break

          case 'f_count_string':
            expression = this.replaceAll(expression, 'f_count_string', 'this.f_count_string')
            break

          case 'and':
            expression = this.replaceAll(expression, 'and', '&&')
            break

          case 'f_count_string':
            expression = this.replaceAll(expression, 'or', '||')
            break
          case 'Long':
            expression = this.replaceAll(expression, 'Long', 'this.Long')
            break
          default:
            break;
        }
      }
    });

    return expression
  }

  If(expression: boolean, ifTrue: string | CallableFunction, ifFalse: string | CallableFunction): any {
    if (expression) {
      return ifTrue
    } else {
      return ifFalse
    }
  }

  Trim(str: string): string {
    return str.trim()
  }

  Lem(str: string): number {
    return str.length
  }

  Mid(str: string, from: number, length?: number | undefined): string {
    return str.substr(from, length)
  }

  f_mid(str: string, from: number, length: number): string {
    return str.substring(from, length)
  }

  Left(str: string, qtd: number): string {
    return str.substring(0, qtd)
  }

  Right(str: string, qtd: number): string {
    return str.substring(qtd, str.length)
  }

  Pos(str: string, searchString: string, position?: number | undefined): number {
    return str.indexOf(searchString, position) + 1
  }

  f_pos(str: string, searchString: string, occurrence: number): number {
    let pos = str.indexOf(searchString)
    for (let index = 1; index < occurrence; index++) {
      pos = str.indexOf(searchString, pos + 1)
    }
    return pos + searchString.length - 1
  }

  LastPos(str: string, searchString: string): number {
    return str.lastIndexOf(searchString) + 1
  }

  Upper(str: string): string {
    return str.toUpperCase()
  }

  Lower(str: string): string {
    return str.toLowerCase();
  }

  Long(str: string): number | string {
    const toNumber = Number(str)
    if (!_.isNaN(toNumber)) {
      return toNumber
    } else {
      return str
    }
  }

  Case(expression: string): string {
    const exp = expression.split('When', 1)
    const exp1: string = exp[0]!;
    const newExp = `if (${eval(this.readExpression(exp1))}) ${exp[1]}`

    return eval(this.readExpression(newExp))
  }

  f_global_replace(str: string, searchString: string, replaceString: string): string {
    return str.replace(searchString, replaceString)
  }

  f_count_string(str: string, searchString: string): number {
    let arr = str.split(searchString)
    return arr.length - 1
  }

  private replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

}