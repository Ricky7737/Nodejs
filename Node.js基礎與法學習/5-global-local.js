////function 特性介紹2
//全域 (Global) vs 區域(Local)
let test1 = () =>{
     //區域變數
    var num1 = 12;
    return num1;
};

let test2 = () =>{
    //區域變數
    let num2 = 15;
    return num2;
};

let test3 = () =>{
     //全域變數
    num3 = 18;
    return num3;
};

console.log( test1() );
console.log( test2() );
console.log( test3() );

//onsole.log( "num3:", num3);
//console.log( "num2:", num2);
//console.log( "num1:", num1);
console.log('-'.repeat(30));  //給Terminal畫線的寫法

//// var/ let / const 差異
////寫程式時要跟別人約定好定義好變數怎麼使用
//var : function scope, 可以任意更改  較少人用
//let : block scope, 可以任意更改
//const : block scope, 可以任意更改

let test4 = ()=>{
    //var 是用在整個function
    //let 是{}裡的人都能用，但離開{}外的程式就不可以

    let num4 = 150;
    //var message ;  //整個test4 function都可以用
    let message;
    //const message = "";  //不可更改的變數，第一次賦予甚麼就甚麼

    if(num4>0){
        //var message = "正數~~~";
        //let message = "正數~~~";   //這裡只在if scope有效
        //console.log("正數!!!!");
        message = "正數~~~";
    }else{
        //var message = "負數~~~";
        //let message = "負數~~~";   //這裡只在else scope有效
        //console.log("負數!!!");
        message = "負數~~~";
    };
    console.log(message);
};

test4();

