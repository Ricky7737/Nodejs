//// 比較優雅的 讀檔案方式
// 處理讀取檔案
const { rejects } = require("assert");
const e = require("express");
const fs = require("fs");
const { resolve } = require("path");

//// 1. 使用 readFileSync (這邊 同步讀取資料 )
//let d1 = fs.readFileSync("models/data1.json","utf8");    // 同步 , 執行完才往下
//console.log("d1 完成！！！");
//let d2 = fs.readFileSync("models/data2.json","utf8");    // 同步 , 執行完才往下
//console.log("d2 完成！！！");
//let d3 = fs.readFileSync("models/data3.json","utf8"); // 非同步 , d3 為 undefined
//console.log("d3 完成！！！");

//console.log(JSON.parse(d1));
//console.log(JSON.parse(d2));
//console.log(JSON.parse(d3));

//console.log("-".repeat(50));

// 非同步處理機制
/// 2. 使用Promise
/// Promis 非同步工作 new Promise()=>{...}  成功 resolve執行 .then(....)   失敗 reject 執行 .catch(....)
// 1) 宣告Promis

let readFilePromise = (dataPath)=>{
    //return (new)產生一個新的資料型別叫做Promise
    //rejects拒絕  //resolve解決
    return new Promise( (resolve, reject)=>{

        //非同步，呼叫的檔案透過dataPath決定
        fs.readFile(dataPath , "utf-8", (err,data)=>{
            if(err){
                reject(err);  
            }else{
                resolve(data);
            };
        });
    });
};

// 2) 使用 Promis

readFilePromise("./models/data1.json") //從這邊先跑
    //.then 接下來
    .then(result=>{
        console.log("我是 .then 區 !!!!");
        console.log(result);
    })
    //做下一件事情
    .catch(err =>{
        console.log("我是 .catch 區 !!!!");
        console.log(err);
    });

//// 2-1 Promise 特性
// flipCoin function
//let flipCoin= ()=>{
//    return new Promise( (resolve, rejects)=>{
//        // 延遲時間 執行, 以毫秒 (ms) 為單位
//        setTimeout( ()=>{
//            if(Math.random() > 0.2){
//                resolve("上課~~~!!!!");
//            }else{
//                rejects("翹課!!!")
//            };
//        }, 500);
//    });
//};

//flipCoin()
    // .then 可以很多個
    //.then(result=>{
        //console.log("我是 flipcoin 的 .then 區~~");
        //console.log(result);
    //})
    //.then(r2=>{
        //console.log("這是第 2 個");
        //return "ABCD";  //傳給下一個r3
    //})
    //.then(r3=>{
        //console.log("這是第 3 個");
        //console.log("r3:", r3)
    //})
    //.then(r4=>{
        //console.log("這是第 4 個");
    //})

    //.catch(err=>{
        //console.log("我是 flipcoin 的 .catch 區~~");
        //console.log(err);
    //});

//flipCoin()
    //.then(r=>{
        //console.log(r);
        //return "-> 雖然都起床了";
    //})
    //.then(r=>{
        //console.log(r);
        //return "-> 昨天太晚睡 ,還是再睡一點吧";
    //})
    //.then(r=>{
        //console.log(r);
        //return "-> 沒精神無法上課呢";
    //})
    //.then(r=>{
        //console.log("-".repeat(30));
        //console.log("翹課-.-");
    //})

    //.catch(err=>{
        //console.log(err);
    //});


//Promise.all
// a. 全部完成 (fulfilled, 成功狀態)  ---> 進入 .then 區
// b. 只要有一個 rejected (失敗狀態)  ---> 進去 .catch 區
// 這邊可以用來撈資料庫
//Promise.all([
        //flipCoin(),
        //flipCoin(),
        //flipCoin()
    //])
    //.then(r=>{
        //console.log("我是Promis.all 的 .then 區 !!!!");
        //console.log(result);
    //})
    //.catch(err=>{
        //console.log("我是Promis.all 的 .catch 區 !!!!");
        //console.log(err);
    //});


//使用 Promise 讀取 5 個檔案
let readFilePromise1 = (dataPath)=>{
    //return (new)產生一個新的資料型別叫做Promise
    //rejects拒絕  //resolve解決
    return new Promise( (resolve, reject)=>{

        //非同步，呼叫的檔案透過dataPath決定
        fs.readFile(dataPath , "utf-8", (err,data)=>{
            if(err){
                reject(err);  
            }else{
                resolve(data);
            };
        });
    });
};

let output = {};

readFilePromise1("./models/data1.json") //從這邊先跑
    //.then 接下來
    .then(data1=>{
        output["data1"] = JSON.parse(data1);   //把資料轉乘 .JSON檔
        return readFilePromise1("./models/data2.json")  //成功後傳到 data2
    })
    .then(data2=>{
        output["data2"] = JSON.parse(data2);    //把資料轉乘 .JSON檔
        return readFilePromise1("./models/data3.json")  //成功後傳到 data2
    })
    .then(data3=>{
        output["data3"] = JSON.parse(data3);    //把資料轉乘 .JSON檔
        console.log(output);
    })

    //做下一件事情
    .catch(err =>{
        console.log(err);
    });
console.log("-".repeat(70));

///////////////////////////////////////////////////////////////////////////////
// Async / Await  //大部分都用這個
// 為 ES7 語法
// 1. await 在 async funtion 內才可使用
// 2. await 後的 function, 須回傳 Promise

//定義 flipCoin function

let flipCoin1= ()=>{
    return new Promise( (resolve, rejects)=>{
        // 延遲時間 執行, 以毫秒 (ms) 為單位
        setTimeout( ()=>{
            if(Math.random() > 0.2){
                resolve("上課~~~!!!!");
            }else{
                rejects("翹課!!!")
            };
        }, 500);
    });
};

// async / await 版本
let main = async () =>{
    //使用 try-catch 做錯誤處理
    try{
        let r = await flipCoin1();   // 轉成同步語言執行 ---> 直行
        console.log("async / await 完成");
        console.log(r);
    }catch{
        console.log(err);
    };
};

main();

//讀三個檔案
//使用 Promise 讀取 5 個檔案
let readFilePromise2 = (dataPath)=>{
    //return (new)產生一個新的資料型別叫做Promise
    //rejects拒絕  //resolve解決
    return new Promise( (resolve, reject)=>{

        //非同步，呼叫的檔案透過dataPath決定
        fs.readFile(dataPath , "utf-8", (err,data)=>{
            if(err){
                reject(err);  
            }else{
                resolve(JSON.parse(data));
            };
        });
    });
};

let main2 = async () =>{
    //使用 try-catch 做錯誤處理
    try{
        //正常執行區域
        let output = {};
        let data1 = await readFilePromise2("./models/data1.json");
        let data2 = await readFilePromise2("./models/data2.json");
        let data3 = await readFilePromise2("./models/data3.json");
        
        output["data1"] = data1;
        output["data2"] = data2;
        output["data3"] = data3;

        console.log(output);

    }catch{
        //發生錯誤執行catch
        console.log(err);
    };
};

main2();