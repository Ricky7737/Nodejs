/// 建立 /books router
const express = require("express");   // requir套件進來
const router = express.Router();      // 產生router物件存入變數
const fs = require("fs")              // File system, Node.js 原生套件

// 路由設定 / end-point設定 / API 設計
router.get("/" , (req, res) =>{
    res.send("我是 /books 的根路徑");
});

// 網址 /books/page
router.get("/page" , (req, res) =>{
    res.json({ "message:": "我是 /books 的路徑!!!!"});   //輸出一個 json格式資料
});

//讀取data.json資料近來
router.get("/data",(req, res)=>{
    
    //讀取資料，(檔案名稱, 編碼, 再放一個 function)
    //(err,data) err=>錯誤資料  data =>你的資料
    //err 通常沒事 為undefind

    // 檔案系統 I/O ==> 非同步的動作 (asynchronus)
    //註冊完後，之後再來執行(call back function)
    fs.readFile("data.json", "utf-8", (err,data)=>{
       
        // err 條件設為找不到檔案
        if(err){
            console.log(err);
            res.send("404檔案有問題")
        }else{
            //console.log(data);
            //console.log(typeof data);  //檢查資料型態

            //console.log("-".repeat(50))

            let result = JSON.parse(data);  //將data轉換成 JSON(object) 資料型別
            console.log(result);
            console.log(typeof result);  //檢查資料型態

            res.send(result);        //將json資料拋到前端
        };
    });
});

//建立一個 http://localhost:8088/books//multi-data 的網址
//讓 data1 資料回傳到前端
router.get("/multi-data", (req, res)=>{
    // 讀model/data${n}.json 的資料

    let result = {};
    
    fs.readFile("./models/data1.json" , "utf-8", (err,data1)=>{
        result["data1"] = JSON.parse(data1); 
        res.json(result);
    });
});

let readFilePromise = (dataPath)=>{
    return new Promise( (resolve, reject)=>{
        fs.readFile(dataPath , "utf-8", (err,data)=>{
            if(err) reject(err);  
            else resolve(JSON.parse(data));
        });
    });
};

// /multi-data-promise  API
router.get("/multi-data-promise", (req, res)=>{
    let result = {};

    readFilePromise("./models/data1.json")
    .then(data1 => {
        result["data1"] = data1;
        return readFilePromise("./models/data2.json");
    })
    .then(data2 => {
        result["data2"] = data2;
        return readFilePromise("./models/data3.json");
    })
    .then(data3 => {
        result["data3"] = data3;
        return readFilePromise("./models/data4.json");
    })
    .then(data4 => {
        result["data4"] = data4;
        return readFilePromise("./models/data2.json");
    })
    .then(data5 => {
        result["data5"] = data5;
        result["messsage"] = "我是用Promise!!!!"
        res.json(result);
    })

    .catch(err => {
        res.send("檔案有問題!!!!")
    });
});

// multi-data-async  API
router.get("/multi-data-Async", async(req, res)=>{
    try{
        //正常執行區域
        let result = {};
        let data1 = await readFilePromise("./models/data1.json");
        let data2 = await readFilePromise("./models/data2.json");
        let data3 = await readFilePromise("./models/data3.json");
        let data4 = await readFilePromise("./models/data4.json");
        let data5 = await readFilePromise("./models/data5.json");

        result["data1"] = data1;
        result["data2"] = data2;
        result["data3"] = data3;
        result["data4"] = data4;
        result["data5"] = data5;
        result["message"] = "我是 Async/Await 取得!!!"
        res.json(result);
    }catch{
        //發生錯誤執行catch
        res.send("檔案有問題!!!!")
    };
});

// [module][1] 將 router 導出, 等別人 require 引入使用
module.exports = router;