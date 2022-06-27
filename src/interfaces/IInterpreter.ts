import LayouItem from "./LayoutItem";

export interface IInterpreter {
  sumTest: (a: number, b: number) => number;
  getData: (layout: Array<LayouItem>) => Object[];
  getJson: () => any;
  getAttributeRuleByExpression: (expression: string) => any;
  readExpression: (expression: string) => string;
  If: (expression: boolean, ifTrue: string | CallableFunction, ifFalse: string | CallableFunction) => any;
  Trim: (str: string) => string;
  Lem: (str: string) => number;
  Mid: (str: string, from: number, length?: number | undefined) => string;
  f_mid: (str: string, from: number, length: number) => string;
  Left: (str: string, qtd: number) => string;
  Right: (str: string, qtd: number) => string;
  Pos: (str: string, searchString: string, position?: number | undefined) => number;
  f_pos: (str: string, searchString: string, occurrence: number) => number;
  LastPos: (str: string, searchString: string) => number;
  Upper: (str: string) => string;
  Lower: (str: string) => string;
  Case: (expression: string) => string;
  f_global_replace: (str: string, searchString: string, replaceString: string) => string;
  f_count_string: (str: string, searchString: string) => number;
}