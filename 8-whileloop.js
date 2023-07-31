////while-loop 用在未知次數 設定某種條件離開迴圈

let cnt = 0;
let limit = 10;
//只要 條件符合就回來一直執行
//while( cnt < 10 ){
    //console.log(`第 ${cnt} 次執行`);
    //cnt++;  //cnt疊加1

//};

//另一種寫法
while( true ){
    console.log(`第 ${cnt} 次執行`);
    cnt++;  //cnt疊加1

    //結束條件
    if( cnt === limit ){
        console.log("執行beak!!!");
        break; //終止迴圈
    };
};

console.log("迴圈執行結束");
console.log("-".repeat(50));


///抽號碼
console.log( Math.random());  //Math.random() 隨機抽取 0 跟 1之間的 小數
console.log( Math.random()*49); //抓取0~49的 小數
console.log( Math.ceil(Math.random()*49)); //Math.ceil 自動四捨五入

//抓從 1~ 49 可重複的抓 6 個數字出來
let nums = [];

// num 數6次符合跳出
while(nums.length < 6){
    let n = Math.ceil(Math.random()*49);

    //把 n  存入 nums[]裡
    //nums.push(n);
    //檢查 元素 是否在arr裡
    //nums.includes(n) 用來檢查數值是否在 array 裡
    // ! 反向，若 n 值不在 nums裡的話
    if (!(nums.includes(n))){
        nums.push(n);
    }else{
        console.log(`${n} 重複了 !!!`, nums);
    };
};

console.log(nums);

//將arr排序
console.log("從小排到大", nums.sort((a, b) => a-b ));  //從小排到大


