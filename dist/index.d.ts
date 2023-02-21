import Order from './Order';
import LayouItem from './interfaces/LayoutItem';
import { IInterpreter } from './interfaces/IInterpreter';
export declare class Interpreter implements IInterpreter {
    json: {};
    data: {};
    words: string[];
    phrases: {
        xmlKey: string;
        layoutValue: string;
    }[];
    order: Order;
    constructor();
    sumTest(a: number, b: number): number;
    getData(layout: Array<LayouItem>): Object[];
    getJson(): {};
    getAttributeRuleByExpression(expression: string): any;
    readExpression(expression: string): string;
    If(expression: boolean, ifTrue: string | CallableFunction, ifFalse: string | CallableFunction): any;
    Trim(str: string): string;
    Len(str: string): number;
    Mid(str: string, from: number, length?: number | undefined): string;
    f_mid(str: string, from: number, length: number): string;
    Left(str: string, qtd: number): string;
    Right(str: string, qtd: number): string;
    Pos(str: string, searchString: string, position?: number | undefined): number;
    f_pos(str: string, searchString: string, occurrence: number): number;
    LastPos(str: string, searchString: string): number;
    Upper(str: string): string;
    Lower(str: string): string;
    Long(str: string): number | string;
    Case(expression: string): string;
    f_global_replace(str: string, searchString: string, replaceString: string): string;
    f_count_string(str: string, searchString: string): number;
    private replaceAll;
}
