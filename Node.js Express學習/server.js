/// 設計網站 router
//  搭配程式把網站寫得更有架構
// Cannot find module 'express' 如果出現這個報錯
// 終端機那邊可以使用 npm install express 裝取套件

const express = require("express"); // requir套件進來
const app = express();             // to 一個資料進app
const portNum = 8088;              // 宣告一個固定的port號

//// [module][2] 引入 /router/book.js 程式
const bookRouter = require("./router/book");  // . -> 當前目錄
const aboutRouter = require("./router/about");  // . js可以忽略

// 路由設定 / end-point設定 / API 設計
app.get("/" , (req, res) =>{
    res.send("嗨嗨, 我是 Node.js 伺服器.");
});

// 現在想取得一些路由
// / books/page
// / books/data
// / books/hihi

////// [module][3] 將/books 的 requests, 導入到 booksRouter 處裡
app.use("/books", bookRouter);
app.use("/about", aboutRouter); //準備開發新功能可以先寫這裡

// sever端 綁一個port號
app.listen(portNum, ()=>{
    console.log(`Sever is running at local: ${portNum}`);
});

//程式執行後，可以在網頁上打 localhost:8088