//// 迴圈控制

//for loop   已知次數
console.log("start !!!");
///初始條件  //結束條件//跳躍級距
for(let i = 0; i<10 ; i++){
    //執行條件
    console.log(i);  //這裡被執行9次
};
console.log("End")
console.log('-'.repeat(30));  //給Terminal畫線的寫法

//新的範例
console.log("start !!!");
///初始條件  //結束條件//跳躍級距
for(let j = 0; j<6 ; j = j+1){
    //執行條件
    console.log( " 第 " + j + " 次執行 ");  //這裡被執行9次
};
console.log("End")
console.log('-'.repeat(30));  //給Terminal畫線的寫法

/// 練習
let arr1 = [97,100,58,85,67,88,54,60]
let sum1 = 0;
//for (let i = 0; i<=6 ; i++){  <=加到第6個就結束不佳

for (let i = 0; i<=arr1.length-1 ; i++){
    //arr1.length 是從 1開始到最後一個index+1，所以要-1
    //console.log(arr1[i])
    sum1 = sum1 + arr1[i]; //等於不斷把arr1 裡的數字疊加上去
    //i = 0 -> sum1 = 0 + 97 = 97
    //i = 1 -> sum1 = 91 + 100 = 197 以此類退一直到 i = 6
};
console.log("總和 : ", sum1);
console.log("平均 : ", sum1/arr1.length );

// 小試身手
// 1.計算1+到100總和
let sum2 = 0;
for(let i=1; i<=10000; i++){
    sum2 += i; //sum2 疊加意思
};
console.log("1+2+3+4+...+到10000 = ", sum2);
console.log('-'.repeat(30));  //給Terminal畫線的寫法

// 2.寫出一支程式劃出
// ******
// *****
// ****
// *** 
// ** 
// *

for (let j = 6; j>0; j--){
    console.log('*'.repeat(j));
};
console.log('-'.repeat(30));  //給Terminal畫線的寫法

// 3.變數 name = "Jack",
// JJJJJ
// aaaa
// ccc
// kk
// i
let name = "Jack!";
//console.log(name[0].repeat(5));單印一個JJJJJ

for (let i = 0 ; i<name.length ; i++ ){
    console.log(name[i].repeat(5-i));
    //console.log(i);
};
console.log('-'.repeat(30));  //給Terminal畫線的寫法



