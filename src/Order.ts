import LayouItem from "./interfaces/LayoutItem"
import { Interpreter } from "./index"
import Item from "./Item"

export default class Order {
  itens: Item[]
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

  constructor() {
    this.itens = []
  }

  addItem(item: Item) {
    this.itens.push(item)
  }

  getItems() {
    return this.itens
  }

  getDataByLayout(layout: Array<LayouItem>): Object[] {
    var data: Object[] = []
    this.itens.map((value) => {

      let newProductData: { nItem: string, data: Object[] } = {
        nItem: value.nItem,
        data: []
      }

      layout.forEach(element => {

        let newExpression = ""
        this.phrases.forEach((phrase: { xmlKey: string, layoutValue: string }) => {
          if (new RegExp(phrase.layoutValue).test(element.expression)) {
            switch (phrase.layoutValue) {
              case 'ref_prod':
                newExpression = this.replaceAll(element.expression, phrase.layoutValue, `'${value.cProd}'`)
                break;
              case 'cod_prod':
                newExpression = this.replaceAll(element.expression, phrase.layoutValue, `'${value.cEAN}'`)
                break;
              case 'desc_prod':
                newExpression = this.replaceAll(element.expression, phrase.layoutValue, `'${value.xProd}'`)
                break;
              case 'infadprod':
                newExpression = this.replaceAll(element.expression, phrase.layoutValue, value.infAdProd ? `'${value.infAdProd}'` : `''`)
                break;

              default:
                break;
            }
          }
        })

        const interpreter = new Interpreter();
        let newValue = interpreter.getAttributeRuleByExpression(newExpression)

        let newAttributeData = {
          attribute: element.name,
          layoutExpression: element.expression,
          expression: newExpression,
          value: newValue
        }

        newProductData.data.push(newAttributeData)

      });

      data.push(newProductData)

    })

    return data
  }

  private replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

}