'use strict';

let num = 100;
let str = '100';

// 比較演算子
// == 等しい  内容が同じであれば型が違っても同じとみなされる
// ===  厳密に等しい　　内容も型も同じ時にTrueになる　基本的にはこちらを使う　バグが発生しにくくなる

// if (num == str) {
//   console.log('同じ');
// } else {
//   console.log('同じではない');
// }

if (num === str) {
  console.log('同じ');
} else {
  console.log('同じではない');
}
