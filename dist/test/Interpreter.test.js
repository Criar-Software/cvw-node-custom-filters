"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import path from "path";
var Interpreter_1 = __importDefault(require("../Interpreter"));
// test("Dever ler um xml e converter para um json!", () => {
//   // given
//   const layout = [
//     {
//       name: "cod_cor",
//       expression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//     },
//     {
//       name: "sexo",
//       expression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//     },
//     {
//       name: "tamanho",
//       expression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))"
//     }
//   ]
//   const interpreter = new Interpreter()
//   interpreter.readXml(path.resolve(__dirname, '52210878876950012340551780015685341701156860.xml'))
//   // when
//   const data = interpreter.getData(layout);
//   expect(data).toStrictEqual([
//     {
//       nItem: '1',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('0241KKLEN/P', 5, Pos('0241KKLEN/P', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('BLUSA MM FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('BLUSA MM FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('0241KKLEN/P', Pos('0241KKLEN/P', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '2',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('0241KKLEN/M', 5, Pos('0241KKLEN/M', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('BLUSA MM FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('BLUSA MM FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('0241KKLEN/M', Pos('0241KKLEN/M', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '3',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('0241YVCEN/P', 5, Pos('0241YVCEN/P', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('BLUSA MM FEM (35,08%) HERING', 'FEM') > 0, 'F', If(Pos('BLUSA MM FEM (35,08%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('0241YVCEN/P', Pos('0241YVCEN/P', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '4',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('0241YVCEN/M', 5, Pos('0241YVCEN/M', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('BLUSA MM FEM (35,08%) HERING', 'FEM') > 0, 'F', If(Pos('BLUSA MM FEM (35,08%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('0241YVCEN/M', Pos('0241YVCEN/M', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '5',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('0241YVCEN/G', 5, Pos('0241YVCEN/G', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('BLUSA MM FEM (35,08%) HERING', 'FEM') > 0, 'F', If(Pos('BLUSA MM FEM (35,08%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('0241YVCEN/G', Pos('0241YVCEN/G', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '6',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('0241YVCEN/XXG', 5, Pos('0241YVCEN/XXG', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('BLUSA MM FEM (35,08%) HERING', 'FEM') > 0, 'F', If(Pos('BLUSA MM FEM (35,08%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('0241YVCEN/XXG', Pos('0241YVCEN/XXG', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '7',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('HB7CWHPEN/038', 5, Pos('HB7CWHPEN/038', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('HB7CWHPEN/038', Pos('HB7CWHPEN/038', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '8',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('HB7CWHPEN/040', 5, Pos('HB7CWHPEN/040', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('HB7CWHPEN/040', Pos('HB7CWHPEN/040', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '9',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('HB7CWHPEN/042', 5, Pos('HB7CWHPEN/042', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('HB7CWHPEN/042', Pos('HB7CWHPEN/042', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '10',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('HB7CWHPEN/044', 5, Pos('HB7CWHPEN/044', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('HB7CWHPEN/044', Pos('HB7CWHPEN/044', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '11',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('H9A8N10EN/P', 5, Pos('H9A8N10EN/P', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CALCA FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CALCA FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('H9A8N10EN/P', Pos('H9A8N10EN/P', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '12',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('H9A8N10EN/M', 5, Pos('H9A8N10EN/M', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CALCA FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CALCA FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('H9A8N10EN/M', Pos('H9A8N10EN/M', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '13',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('H9A8N10EN/G', 5, Pos('H9A8N10EN/G', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CALCA FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CALCA FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('H9A8N10EN/G', Pos('H9A8N10EN/G', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '14',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('H9A8N10EN/XG', 5, Pos('H9A8N10EN/XG', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CALCA FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CALCA FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('H9A8N10EN/XG', Pos('H9A8N10EN/XG', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '15',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('K0MQWHPSN/044', 5, Pos('K0MQWHPSN/044', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('K0MQWHPSN/044', Pos('K0MQWHPSN/044', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '16',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('K0MQWHPSN/042', 5, Pos('K0MQWHPSN/042', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('K0MQWHPSN/042', Pos('K0MQWHPSN/042', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '17',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('K0MQWHPSN/040', 5, Pos('K0MQWHPSN/040', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('K0MQWHPSN/040', Pos('K0MQWHPSN/040', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '18',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('K0MQWHPSN/038', 5, Pos('K0MQWHPSN/038', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('K0MQWHPSN/038', Pos('K0MQWHPSN/038', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '19',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('K0MQWHPSN/036', 5, Pos('K0MQWHPSN/036', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('SHORTS FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('SHORTS FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('K0MQWHPSN/036', Pos('K0MQWHPSN/036', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '20',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('0201WHREN/P', 5, Pos('0201WHREN/P', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CAMISETA MM MASC (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CAMISETA MM MASC (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('0201WHREN/P', Pos('0201WHREN/P', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '21',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('0201WHREN/G', 5, Pos('0201WHREN/G', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CAMISETA MM MASC (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CAMISETA MM MASC (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('0201WHREN/G', Pos('0201WHREN/G', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '22',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('015MAXTEN/P', 5, Pos('015MAXTEN/P', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CAMISETA REGATA MASC (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CAMISETA REGATA MASC (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('015MAXTEN/P', Pos('015MAXTEN/P', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '23',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('015MAXTEN/M', 5, Pos('015MAXTEN/M', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CAMISETA REGATA MASC (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CAMISETA REGATA MASC (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('015MAXTEN/M', Pos('015MAXTEN/M', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '24',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('015MAXTEN/G', 5, Pos('015MAXTEN/G', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CAMISETA REGATA MASC (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CAMISETA REGATA MASC (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('015MAXTEN/G', Pos('015MAXTEN/G', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '25',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('015MAXTEN/XG', 5, Pos('015MAXTEN/XG', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('CAMISETA REGATA MASC (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('CAMISETA REGATA MASC (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('015MAXTEN/XG', Pos('015MAXTEN/XG', '/') + 1))",
//           value: ''
//         }
//       ]
//     },
//     {
//       nItem: '26',
//       data: [
//         {
//           attribute: 'cod_cor',
//           layoutExpression: "Trim(Mid(ref_prod, 5, Pos(ref_prod, '/') - 6))",
//           expression: "Trim(Mid('7CJUKMMEN/XG', 5, Pos('7CJUKMMEN/XG', '/') - 6))",
//           value: ''
//         },
//         {
//           attribute: 'sexo',
//           layoutExpression: "If(Pos(desc_prod, 'FEM') > 0, 'F', If(Pos(desc_prod, 'MASC') > 0, 'M', ''))",
//           expression: "If(Pos('ROBE ML FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('ROBE ML FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))",
//           value: ''
//         },
//         {
//           attribute: 'tamanho',
//           layoutExpression: "Trim(Mid(ref_prod, Pos(ref_prod, '/') + 1))",
//           expression: "Trim(Mid('7CJUKMMEN/XG', Pos('7CJUKMMEN/XG', '/') + 1))",
//           value: ''
//         }
//       ]
//     }
//   ])
// })
test("Deve retornar o cod. cor dos produtos!", function () {
    // given
    var expression = "If(Pos('BLUSA MM FEM (29,18%) HERING', 'FEM') > 0, 'F', If(Pos('BLUSA MM FEM (29,18%) HERING', 'MASC') > 0, 'M', ''))";
    var interpreter = new Interpreter_1.default();
    // when
    var response = interpreter.getAttributeRuleByExpression(expression);
    // then
    expect(response).toBe('F');
});
test("Deve retornar o cod. cor dos produtos!", function () {
    // given
    var expression = "Trim( Mid('0241KKLEN/P', 5, Pos('0241KKLEN/P', '/') - 6 ) )";
    var interpreter = new Interpreter_1.default();
    // when
    var response = interpreter.getAttributeRuleByExpression(expression);
    // then
    expect(response).toBe('KLEN');
});
// Teste If
test("Teste de função If", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste and
test("Teste de função and", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste or
test("Teste de função or", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Trim
test("Teste de função Trim", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Len
test("Teste de função Len", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Mid
test("Teste de função Mid", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste f_mid
test("Teste de função f_mid", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Left
test("Teste de função Left", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Right
test("Teste de função Right", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Pos
test("Teste de função Pos", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste f_pos
test("Teste de função f_pos", function () {
    var expression = "f_pos ('7897897897891', '89', 2)";
    var interpreter = new Interpreter_1.default();
    var response = interpreter.getAttributeRuleByExpression(expression);
    expect(response).toBe(5);
});
// Teste LastPos
test("Teste de função LastPos", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Upper
test("Teste de função Upper", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Lower
test("Teste de função Lower", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste Case
test("Teste de função Case", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste f_global_replace
test("Teste de função f_global_replace", function () {
    // const expression = ""
    // const interpreter = new Interpreter()
    // const response = interpreter.getAttributeRuleByExpression(expression)
});
// Teste f_count_string
test("Teste de função f_count_string", function () {
    var expression = "f_count_string ('7897897897891', '89')";
    var interpreter = new Interpreter_1.default();
    var response = interpreter.getAttributeRuleByExpression(expression);
    expect(response).toBe(4);
});
