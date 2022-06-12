# JavaScript_Udemy

モダン JavaScript の基礎から始める挫折しないための React 入門  
**モダン JavaScript の機能に触れる**  
・変数宣言  
let(上書き可能、再宣言不可能)  
const(上書きも再宣言も不可能)  
・テンプレート文字列  
const message2 = `私の名前は${name}です。年齢は${age}です。`;  
console.log(message2);  
・アロー関数  
(引数) => {}
function いらない/一行なら{}なしでも記述可能  
・分割代入  
コードが冗長にならない
const { name, age } = myProfile;  
const message2 = `名前は${name}です。年齢は${age}歳です。`;  
console.log(message2);  
・デフォルト値  
引数がない場合、ゲストと表示する
(name ="ゲスト") => console.log(`こんにちは！${name}さん！`);  
・スプレッド構文  
...をつけることで下記３つの処理を行える  
① 配列の展開  
② 配列をまとめる  
③ 配列の結合、コピー(コピーと参照は違うので注意)  
・map や filter を使った配列の処理  
 map・・・配列の中身を展開していく  
 変数名.map(引数)=>{}  
 filter・・・条件に合わせて filter をかけて配列の中身を展開していく  
 変数名.filter(引数)=>{
return 条件式
}  
 ・三項演算子?:  
 ifelse を 1 行で書くことができる  
 ある条件 　？　 条件が true の時 : 条件が false の時  
 ・論理演算子  
 ||（または）は,左側が false なら右側を返す  
const num = 100;  
const fee = num || "金額が未設定です";  
&&（かつ）は、左側が ture なら右側を返す  
const num2 = 100;  
const fee2 = num2 && "何か設定されました";
