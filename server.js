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

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

server.get("/hiscore", async (req, res) => {
    try {
        let count = await Games.count({});
        let playerName = "Player" + (count + 1);

        let clearTime = Number(req.query.clearTime || req.query.score || 0);

        await Games.insert({
            name: playerName,
            clearTime: clearTime,
            createdAt: new Date()
        });

        res.redirect("/ranking?player=" + encodeURIComponent(playerName));

    } catch (err) {
        res.send(err.message);
    }
});

server.get("/ranking", async (req, res) => {
    try {
        let currentPlayer = req.query.player || "";

        let data = await Games.find({}).sort({ clearTime: 1 });

        let rows = "";

        data.forEach((item, index) => {
            let isCurrentPlayer = item.name === currentPlayer;

            rows += `
<tr class="${isCurrentPlayer ? "current-row" : ""}">
    <td>${index + 1}</td>
    <td>
        ${item.name || "玩家"}
        ${isCurrentPlayer ? `<span class="you-tag">(你)</span>` : ""}
    </td>
    <td>${item.clearTime} 秒</td>
</tr>
`;
        });

        res.send(`
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<title>通關排行榜</title>

<style>
body{
    margin:0;
    min-height:100vh;
    background:linear-gradient(135deg,#07101f,#152238,#0b1020);
    color:white;
    font-family:Arial,"Microsoft JhengHei",sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
}

.card{
    width:650px;
    padding:45px 40px;
    background:rgba(255,255,255,0.08);
    border:1px solid rgba(255,255,255,0.25);
    border-radius:18px;
    box-shadow:0 20px 60px rgba(0,0,0,0.45);
    text-align:center;
}

h1{
    margin:0 0 18px;
    color:#ffd400;
    font-size:34px;
    letter-spacing:2px;
}

.current-player{
    margin-bottom:26px;
    color:#ffd400;
    font-size:24px;
    font-weight:bold;
}

table{
    width:100%;
    border-collapse:collapse;
}

th{
    color:#1fa3ff;
    font-size:17px;
    padding:14px;
    border-bottom:1px solid rgba(255,255,255,0.2);
}

td{
    padding:14px;
    font-size:18px;
    border-bottom:1px solid rgba(255,255,255,0.18);
}

.current-row{
    background:rgba(255,212,0,0.15);
    color:#ffd400;
    font-weight:bold;
}

.you-tag{
    margin-left:8px;
    color:#ffd400;
    font-weight:bold;
}

.back{
    display:inline-block;
    margin-top:30px;
    padding:13px 34px;
    background:#ffd400;
    color:#111;
    text-decoration:none;
    border-radius:999px;
    font-size:17px;
    font-weight:bold;
}

.back:hover{
    background:#ffe45c;
}
</style>
</head>

<body>
<div class="card">
    <h1>通關排行榜</h1>

    ${currentPlayer ? `
    <div class="current-player">
        你是 ${currentPlayer}
    </div>
    ` : ""}

    <table>
        <tr>
            <th>排名</th>
            <th>玩家</th>
            <th>通關時間</th>
        </tr>
        ${rows}
    </table>

    <a class="back" href="/">回首頁</a>
</div>
</body>
</html>
`);
    } catch (err) {
        res.send("排行榜讀取失敗：" + err.message);
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});