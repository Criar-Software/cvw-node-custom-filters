
export default class Item {
  nItem: string
  cProd: string
  cEAN: string
  xProd: string
  infAdProd?: string
  
  constructor(nItem: string, cProd: string, cEAN:string, xProd: string, infAdProd?: string) {
    this.nItem = nItem
    this.cProd = cProd
    this.cEAN = cEAN
    this.xProd = xProd
    this.infAdProd = infAdProd
  }
}