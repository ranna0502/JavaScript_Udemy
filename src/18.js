// /**
//  * const,let等の変数宣言
//  */

// //  /** 旧来の変数宣言 */
// var val1 = "var変数";
// console.log(val1);

// // // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// // このように、varでは意図しないところで上書きや再宣言ができてしまう。

// let val2 = "let変数";
// console.log(val2);

// // // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // // letは再宣言は不可能
// // // エラーが出るので、意図しないところでの再宣言を回避することができる
// let var2 = "let変数を再宣言";

// // このように、letでは上書き可能・再宣言不可能である。

// const val3 = "const変数";
// console.log(val3);

// // // const変数は上書きも不可能,read-onlyエラーが出る
// val3 = "const変数を上書き";

// // // constは再宣言も不可能
// const val3 = "const変数を再宣言";

// // このように、constでは上書きも再宣言も不可能である。
// // ただし、
// // constで定義したオブジェクトや配列はプロパティの変更が可能である。

// const val4 = {
//   name: "ran",
//   age: 27
// };
// val4.name = "らん";
// val4.address = "hyogo";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// // 基本的にreactではconstを使用。上書きが必要な場合はletを使用。

/**
 * テンプレート文字列
 */

// const name = "らん";
// const age = 27;
// //  [私の名前はらんです。年齢は27歳です。]

// // 従来の方法
// const message1 = "私の名前は" + name + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// // 文字列を展開する場合は、テンプレート文字列を使用すること。

// /**
//  * アロー関数
//  */

// // 従来の関数
// // function func1(str){
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // functionと書かなくてもいい
// // const func2 = (str) => {
// //   return str;
// // }
// // 処理が一行で終わりその結果を返すだけの場合は、{}とreturnを省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "らん",
//   age: 27,
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// // このように、変数名が長いとコードが冗長になってしまう。
// // 分割代入を使用すると↓

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['ran',27];
// const [name,age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

/**
 * デフォルト値、引数など
 */

//  引数がない場合、undefindとなってしまうのでデフォルト値を設定する。
// const sayHello = (name ="ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文...
 */

// 配列の展開
// const arr1 = [1, 2];
// [1,2]と出力
// // console.log(arr1);
// 1,2と出力
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// 同じ値が出力される,3
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// // 1が出力
// console.log(num1);
// // ２が出力
// console.log(num2);
// // [3,4,5]が出力
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// // arr4と同じ[10,20]が出力
// const arr6 = [...arr4];
// arr6[0] = 100;
// // [100,20]と出力
// console.log(arr6);
// // [10,20]と出力
// console.log(arr4);

// // arr4とarr5を結合した[10,20,30,40]が出力
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// // コピーと参照の違い
// // ＝で代入でもarr8にarr4と同じ値を入れることができる
// // しかし、arr8の配列の中身を変更した場合、参照していると、
// const arr8 = arr4;
// arr8[0] = 100;
// // arr4の配列も[100,20]に変更されてしまう。コピーとは意味が違うので注意。
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 *  */

// //  従来の配列処理
// const nameArr = ["田中","山田","中野"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index+1}番目は${nameArr[index]}です。`);
// }

// // returnした値を新しい変数で出力する場合
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// // ["田中","山田","中野"]と出力
// console.log(nameArr2);

// // for文と同じ田中、山田、中野と順番に出力される
// nameArr.map((name,index) => console.log(`${index+1}番目は${name}です！`));

// // filter
// const numArr = [1,2,3,4,5];
// // 条件をfilterする
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// // [1,3,5]を出力
// console.log(newNumArr);

// // 自分の名前以外さんをつける
// const newNameArr = nameArr.map((name) => {
//   if (name === "中野"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 使いすぎは可読性悪くなる
// if　　　else　　１行で書くことができる

// ある条件 　？　 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// // 数値ならカンマをつける、文字列ならメッセージを返す
// const formatterdNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formatterdNum);

// // returnの中身で三項演算子を使う例
// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です';
// }
// console.log(checkSum(50,40))

/**
 * 論理演算子の本当の意味を知ろう
 */

//  ||（または）は,左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額が未設定です";
// console.log(fee);

// // &&（かつ）は、左側がtureなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
