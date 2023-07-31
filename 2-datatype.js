// Array,陣列資料
let arr4 = [100,85,95,45,255,75];

// 取值
let a = arr4[0]; //取出100  []裡放index(索引)
let b = arr4[2];
console.log('a :' , a);
console.log('b :' , b);
console.log('-'.repeat(20));  //給Terminal畫線的寫法

// 修改值
arr4[4] = 50;  //把 arr4 裡的255修改成 50
console.log(arr4);

// 新增值 ---> 使用 push
arr4.push(27);  //array 內建的 「方法」
arr4.push(50);
arr4.push(29);
arr4.push(63);
arr4.push(81);
arr4.push(54);

console.log(arr4);

//取得 array 長度
console.log("Array 長度:" , arr4.length);  //.length就是取得 array資料元素數量
console.log('-'.repeat(20));  //給Terminal畫線的寫法

////////////////////////////////////////
// .map  /.filter
let arr5 = [1,2,3,4,5,6];

let map1 = arr5.map(n => n*2);  //.map()就是給予每個元素一個規則  n => n*2就是都*2
let map2 = arr5.map(n => n**3);  // arr5裡的元素都是給三次方
console.log("map1 : ", map1);
console.log("map2 : ", map2);

let filter1 = arr5.filter(n => n>3);  //filter 過濾 filter()裡放條件
let filter2 = arr5.filter(n => n%2 === 0);  //n%2 === 0 抓出對2除 取餘數為0的元素
console.log("filter1: ", filter1);
console.log("filter2: ", filter2);

// 數字放大3倍後再減1
let map3 = arr5.map(n => n*3);
let map4 = map3.map(n => n-1);

console.log("map3: ", map3);
console.log("map4: ", map4);

// 抓出奇數值
let filter3 = map4.filter(n => n%2 ===1);
console.log("filter3: ", filter3);

//組合動作 (function chain)
let result = arr5.map(n => n*3)
                 .map(n => n-1)
                 .filter(n => n%2 ===1 );

console.log("result: ", result);