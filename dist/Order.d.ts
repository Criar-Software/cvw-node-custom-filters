import LayouItem from "./interfaces/LayoutItem";
import Item from "./Item";
export default class Order {
    itens: Item[];
    phrases: {
        xmlKey: string;
        layoutValue: string;
    }[];
    constructor();
    addItem(item: Item): void;
    getItems(): Item[];
    getDataByLayout(layout: Array<LayouItem>): Object[];
    private replaceAll;
}
