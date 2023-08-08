//1.
for (let i=0; i <11; i++){
    //if(i<6){
        //console.log("*".repeat(6-i));
    //}else{
        //console.log("*".repeat(i-4));
    //};
    
    //以上也可以簡略成下面
    if(i<6) console.log("*".repeat(6-i));
    else console.log("*".repeat(i-4));
};
console.log("-".repeat(50));
//2.word count (字串統計)
let data = ["a", "b", "c", "c", "e", "e", "d", "f", "f", "f", "e","g"];
let result = {};

for(i=0; i<data.length; i++){
    let key = data[i]; //取值
    //console.log(ele);
    // 檢查元素是否在 result裡
    // V -> value +=1
    // X -> 新增一組 key-value pair --> ex: "a" : 1

    if (key in result){  //(key in result)檢查key值是否純在object
        result[key] +=1
    }else{
        result[key] =1
    };
};

console.log(result);
console.log("-".repeat(50));

//99乘法表
for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        //`` 字符串  &{} {}裡填入變數
        console.log(`${i} X ${j} = ${i*j}`);  
    };
};
console.log("-".repeat(50));

//排列成方陣
//99乘法表
for(let i=1; i<10; i++){

    //宣告一個 message
    let message= "";

    for(let j=1; j<10; j++){
       
        //console.log(`${i} X ${j} = ${i*j}`);  
        //宣告一個 space變數
        //let space = "";

        //透過if-else 決定 空白個數
        //寫法比較不佳
        //i*j 是個位數給2個空格，反之1個
        //if(i*j <10) space = "  ";
        //else space = " ";

        // 三元運算子
        let space = (i*j < 10) ? "  " : " ";
        message += `${i} X ${j} = ${i*j}${space}`;  //`` 字符串  &{} {}裡填入變數
    };

    // 再顯示出結果
    console.log(message)
};
console.log("-".repeat(50));

////三元運算子
//(條件判斷) ? (True的回傳值) : (False的回傳值);
let a = 123;
let msg2 = a>0 ? "正數" : "負數";
console.log(msg2); 
console.log("-".repeat(50));

///費氏數列
// 1 1 2 3 5 8 13 21

//宣告一個function
let fibnoacci = (n) => {
    //如果 n=1 或是 n=2
    if(n ===1 || n===2) return 1; //回傳結果 &回傳 return

    let a1 = 1;
    let a2 = 1;
    let r = 0;

    // n =3 -> 執行1次
    // n =4 -> 執行2次
    // n =5 -> 執行3次
    // 執行 n-2

    //i 為執行次數
    for(let i = 0; i < n-2 ; i++){
        r = a1 + a2;
        a1 = a2;  //移動a1  新的 a1 為前一個 a2
        a2 = r;   //移動a2  新的 a2 為前一個加總的 r 值
    };

    //for 跑完 return r
    return r;
};

//顯示費氏數列值
for (let k=1; k<30; k++){
    console.log(fibnoacci(k));
};