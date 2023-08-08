//// 資料型態 1
// Number,數值型態
//console.log就是在js把訊息顯示出來
console.log(123);
console.log(3.14159);

//String, 字串, 文字資料
console.log("黃寶慶");
console.log("今天禮拜六~");

//Boolean, 布林值
console.log(true);
console.log(false);
console.log(123 > 456);

//Data, 時間資料
console.log(new Date());

let time = new Date();  //let 宣告一個變數
console.log(time.getFullYear());

console.log('-'.repeat(50));  //給Terminal畫線的寫法

//////////////////////////////////////////////////////////////////////

//Array, 陣列資料
let arr1 = [1,2,3,4,5];  //宣告一個陣列資料
let arr2 = ['Jeff' , 'leo', 'Keven'];  // 元素  -->陣列裡的資料
let arr3 = [3.14159 , 'Jeff' , true , {"Message" : "嗨嗨"}];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log('-'.repeat(50));  //給Terminal畫線的寫法

//object, 物件資料
let obj1 = {"name" : "Jeff", "age" : 18};
let obj2 = {
    "name2" : "Leo",
    "age2" : 22,
    "other2" : [1,2,3,4,5],
    "massage" : {
        "math_score" : 100,
        "eng_score" : 50
    }
};

let obj3 = {
    "Phycal_score" : 80,
    "Phycal score" : 80 
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log('-'.repeat(50));  //給Terminal畫線的寫法

////////////////////////////////////////////////////////////////////////
//null  空值，在Java裡視為空值
let data1 = null;
console.log(data1);

// undifined 完全沒有值的概念
let data2;
console.log(data2);