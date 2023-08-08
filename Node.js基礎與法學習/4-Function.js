//Function
let arr1 = [1,2,3,4,5];
console.log(arr1.map(n => n*3));
console.log('-'.repeat(30));  //給Terminal畫線的寫法
//Function 功能設計，盡量單一化，期望重複使用程式碼，提高維護性與可讀性
//早期的 function寫法
let add1 = function(a,b){
    return a+b;
};

console.log("add1 :" ,add1(3,5));

//現在的的 arrow function寫法
let add2 = (a, b) =>{
    return a+b;
};

console.log("add2 :" ,add2(3,5));
console.log('-'.repeat(30));  //給Terminal畫線的寫法
//範例一
//宣告一個function
let sayHello = (name) =>{
    //funvtion裡的功能
    console.log("嗨嗨");
    console.log("我是");
    console.log(name);
    console.log("~~~~~");

    let arr3 = [4,5,6,7,8];
    console.log(arr3.map(n => n*3));

};
//使用function
sayHello("Jeff!!!");
console.log("add2 :" ,add2(3,5));

///function特性介紹
let sayHello2 = (name2, age2) =>{
    console.log("嗨嗨 , 我是 " + name2 + "年紀 : " + age2);
};

let sayHello2_with_output = (name2, age2) =>{
    console.log("嗨嗨 , 我是 " + name2 + "年紀 : " + age2);
    //return 輸出結果，若要存入變數要return輸出
    return "下課嘞!!!!"   
};

//sayHello2("ricky", 22);
//sayHello2_with_output("ricky", 22);
let msg1 = sayHello2("ricky", 22);
let msg2 = sayHello2_with_output("ricky", 22);
console.log(msg1);
console.log(msg2);
console.log('-'.repeat(30));  //給Terminal畫線的寫法


let arr3 = [3,4,5,6,7,8];
//arr3.map(n => n*3);

//等同於
let map3 = arr3.map((n) =>{
    return n*3;
});

//let map3 = arr3.map(n => n*3 );  以上可以減寫成這樣

console.log("map3 : ", map3);

console.log('-'.repeat(30));  //給Terminal畫線的寫法

let map4 = arr3.map((n) =>{
    //map3 的元素每個都會近來處理一次
    console.log(n);
    console.log("AAA");
    console.log("BBB");
    return n*3;
});

console.log("map4 : ", map4);
console.log('-'.repeat(30));  //給Terminal畫線的寫法