/**
 * const,let等の変数宣言
 */

//  /** 旧来の変数宣言 */
var val1 = "var変数";
console.log(val1);

// // var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// // var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// このように、varでは意図しないところで上書きや再宣言ができてしまう。

let val2 = "let変数";
console.log(val2);

// // letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// // letは再宣言は不可能
// // エラーが出るので、意図しないところでの再宣言を回避することができる
let var2 = "let変数を再宣言";

// このように、letでは上書き可能・再宣言不可能である。

const val3 = "const変数";
console.log(val3);

// // const変数は上書きも不可能,read-onlyエラーが出る
val3 = "const変数を上書き";

// // constは再宣言も不可能
const val3 = "const変数を再宣言";

// このように、constでは上書きも再宣言も不可能である。
// ただし、
// constで定義したオブジェクトや配列はプロパティの変更が可能である。

const val4 = {
  name: "ran",
  age: 27
};
val4.name = "らん";
val4.address = "hyogo";
console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

// 基本的にreactではconstを使用。上書きが必要な場合はletを使用。
