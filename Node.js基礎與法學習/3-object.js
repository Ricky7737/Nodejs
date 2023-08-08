// object 物件資料
let obj1 ={
    "name" : "jeff",
    "age"  : 18,
    "message" : "嗨嗨",
    "today"   : "禮拜六"
};

console.log(obj1);

// 取值
let name1 = obj1["name"];
let age1 = obj1["age"];
let day1 = obj1["today"];  //抓 key 為 "today"的value

let today = "age";         //宣告today為 age 字串
let today2 = obj1[today];  //如同抓obj1["age"] 的age值

console.log("name :", name1);
console.log("age1 :", age1);
console.log("day1 :", day1);

console.log("today2 :", today2);
console.log('-'.repeat(30));  //給Terminal畫線的寫法

//修改值
obj1["name"] = "Keven";   //修改"name"的值為Keven
obj1["age"] = 30;
console.log(obj1);

//新增值
obj1["score"] = [95,100,77];  //直接新增
obj1["movies"] = "Spider Man";
console.log(obj1);

//object.keys()  / object.values()
//object 為 保留字
console.log("object.key(obj1) :" ,Object.keys(obj1));          //取出key
console.log("object.values()(obj1) :" ,Object.values(obj1));   //取出值
console.log('-'.repeat(30));  //給Terminal畫線的寫法

/// 練習
let data = {
    "name" : "Jeff",
    "height" : 170,
    "weight" : 65,
    "age" : 26,
    "class" : "A-",
    "interest" : ["喝酒", "爬山", "寫程式"]
};
console.log(data);

//顯示 名稱&階級訊息
let message = "嗨嗨, 我是" + data["name"] + ",階級為" + data["class"];
console.log(message); 

//修改height為 180，並顯示訊息，修改name身高為new height
data["height"] = 180;
let message2 = "修改" + data["name"] + "的身高為" + data["height"];
console.log(message2);

//新增最後一項興趣為彈吉他
data["interest"].push("彈吉他");  //使用push新增元素給array
console.log(data);
console.log('-'.repeat(30));  //給Terminal畫線的寫法

/////////////////////////////////////////////////////////////
// Array with Object   陣列與 object一起出現
let data3 = [
    {name : "Jeff"  , age : 18, scores : [95,100,80]},
    {name : "Leo"   , age : 20, scores : [75,66,100]},
    {name : "Holt"  , age : 15, scores : [77,58,100]},
    {name : "Jenny" , age : 17, scores : [100,100,89]},
    {name : "Elle"  , age : 19, scores : [91,75,99]},
  ];

console.log(data3);

// a) 取出 名字資料的 Array --> ["Jeff","Leo","Keven","Holy","Jenny"]
let result2 = data3.map( element => element["name"] );    //element元素
console.log("result2 :",result2);

//取得 score 總和 >= 250 資料，並且人名 & 年紀合併成字串，成為array
let result3 = data3.filter(ele => (ele["scores"][0] + ele["scores"][1] + ele["scores"][2]) >= 250)
                   .map(ele => ele["name"] + "-" + ele["age"]);
console.log("result: ", result3);