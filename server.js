var express = require("express");
var server = express();

var bodyparser = require("body-parser");
server.use(bodyparser.urlencoded({ limit: "100mb", extended: true }));
server.use(bodyparser.json({ limit: "100mb" }));

server.use(express.static(__dirname + "/public"));

var DB = require("nedb-promises");
var Games = new DB({
    filename: "game.db",
    autoload: true
});

// 首頁
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// 上傳成績
server.get("/hiscore", async (req, res) => {
    try {

        let count = await Games.count({});

        let playerName = "Player" + (count + 1);

        let clearTime = Number(
            req.query.clearTime ||
            req.query.score ||
            0
        );

        await Games.insert({
            name: playerName,
            clearTime: clearTime,
            createdAt: new Date()
        });

        res.send(`
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<title>通關結果</title>

<style>

body{
    margin:0;
    background:black;
    color:white;
    font-family:Arial;
    text-align:center;
}

.container{
    margin-top:120px;
}

.title{
    font-size:90px;
    color:#b30000;
    text-shadow:
        2px 2px 0 white,
        -2px -2px 0 white,
        2px -2px 0 white,
        -2px 2px 0 white;
}

.player{
    font-size:40px;
    margin-top:40px;
}

.time{
    font-size:70px;
    margin-top:20px;
}

.btn{
    display:inline-block;
    margin-top:50px;
    padding:15px 50px;
    background:white;
    color:black;
    text-decoration:none;
    font-size:28px;
    border:3px solid black;
}

.btn:hover{
    background:#ddd;
}

</style>

</head>
<body>

<div class="container">

<div class="title">
通關時間：${clearTime} 秒
</div>

<div class="player">
你的編號：${playerName}
</div>

<br>

<a class="btn" href="/ranking">
排行榜
</a>

</div>

</body>
</html>
`);
    }
    catch(err){
        res.send(err.message);
    }
});

// 排行榜
server.get("/ranking", async (req, res) => {
    try {

        let data = await Games.find({})
            .sort({ clearTime: 1 });

        let html = `
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<title>排行榜</title>

<style>

body{
    background:black;
    color:white;
    text-align:center;
    font-family:Arial;
}

h1{
    color:gold;
    font-size:60px;
}

table{
    margin:auto;
    border-collapse:collapse;
    width:70%;
}

th,td{
    border:1px solid white;
    padding:15px;
    font-size:24px;
}

th{
    background:#333;
}

.back{
    display:inline-block;
    margin-top:30px;
    padding:12px 40px;
    background:white;
    color:black;
    text-decoration:none;
    font-size:24px;
}

</style>

</head>
<body>

<h1>排行榜</h1>

<table>

<tr>
<th>排名</th>
<th>玩家</th>
<th>通關時間(秒)</th>
</tr>
`;

        data.forEach((item, index) => {

            html += `
<tr>
<td>${index + 1}</td>
<td>${item.name}</td>
<td>${item.clearTime}</td>
</tr>
`;
        });

        html += `
</table>

<a class="back" href="/">
回首頁
</a>

</body>
</html>
`;

        res.send(html);

    } catch(err) {

        res.send("排行榜讀取失敗：" + err.message);

    }
});

// 啟動
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});