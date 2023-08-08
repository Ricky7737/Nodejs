/// 建立 / about router
const express = require("express");   // requir套件進來
const router = express.Router();      // 產生router物件存入變數

// 路由設定 / end-point設定 / API 設計
router.get("/" , (req, res) =>{
    res.send("這是 /about 的 router");
});

// 網址 /about/testqq
router.get("/testqq" , (req, res) =>{
    //req.query 取值
    //取/about/testqq後 ?賦予的值
    let name = req.query.name;   //req.query 取值
    res.json(`我是 /about/name, 您好 ${name}`);   //輸出一個 json格式資料
});

//把 book.js 和 sever.js 接起來

// [module][1] 將 router 導出, 等別人 require 引入使用
module.exports = router;