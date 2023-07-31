/// 流程控制1 if-else
//宣告a 變數
//a > 0 正數
//a < 0 負數
let a = 0;
if( a>0 ){
    console.log("正數");
}else{
    console.log("負數");
};
console.log('-'.repeat(30));  //給Terminal畫線的寫法

//宣告b 變數
//b > 0 正數
//b === 0 顯示b為0
//b < 0 負數
let b = 0;
if( b>0 ){
    console.log( "正數" );
}else if( b===0 ){
    console.log( "b :"+ b );
}else{
    console.log( "負數" );
};
console.log('-'.repeat(30));  //給Terminal畫線的寫法

////// 算數運算子 + , - , * , / , %(取餘數)
console.log( "算數運算子" );
console.log( 12/5 );
console.log( 12%5 );
console.log('-'.repeat(30));  //給Terminal畫線的寫法

////// 比較運算子 > , < , == , === , != , !==
console.log( "比較運算子" );
console.log( 3>12 );
console.log( 27<30 );
console.log( 12%2 ===0 );
console.log( 113%2 !==0 );
console.log('-'.repeat(30));  //給Terminal畫線的寫法

// == / === 差別
// == : 弱型別
// === : 強型別 (差別在資料型別都要一樣)
console.log( "1 == 1:", 1 == 1 );
console.log( "1 == '1':", 1 == "1" );
console.log( "1 == true:", 1 == true );

// 寫程式上都用 === 比較嚴謹
console.log( "1 === 1:", 1 === 1 );
console.log( "1 === '1':", 1 === "1" );
console.log( "1 === true:", 1 === true );
console.log('-'.repeat(30));  //給Terminal畫線的寫法

// 關係運算值 : && , ||
// && -> 交集, 且 (and)
// || -> 聯集, 或 (or)
console.log( "12%2 === 0 && 3>7: ", 12%2 === 0 && 3>7 );
console.log( "12%2 === 0 && 3>-2: ", 12%2 === 0 && 3>-2);

/// 小試身手
//用 number 來決定 type 組
let number = 5;
let type;

//if-else...
if(number>=100){
    type = "丁組";
}else if( number >=50 && number<100 ){
    type = "丙組";
}else if( number >=0 && number<50 ){
    type = "乙組";
}else{

};

console.log("您的數字是 :" + number + " 您的組別是 :" + type)

////小試身手2
// age >= 30  男生 1000  女 500
// age < 30  男生 700  女 500

let age = 40;
let gender = "M";  // "M"  /"F"
let message3;

// 巢狀if-else
if(gender === "F"){
    message3 = "$500"
}else{
    if( age>=30 ){
        message3 = "$1000" 
    }else{
        message3 = "$700"
    }
};

console.log("您的消費金額 : ", message3)
