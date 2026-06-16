var express = require("express");
var server = express();

var bodyparser = require("body-parser");
server.use(bodyparser.urlencoded({ limit: "100mb", extended: true }));
server.use(bodyparser.json({ limit: "100mb" }));

server.use(express.static(__dirname + "/public"));

var DB = require("nedb-promises");
var Games = new DB({ filename: "game.db", autoload: true });

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// 上傳成績，只回傳 JSON，不開結果網頁
server.get("/hiscore", async (req, res) => {
    try {
        var count = await Games.count({});
        var playerName = "Player" + (count + 1);
        var clearTime = Number(req.query.clearTime || req.query.score || 0);

        await Games.insert({
            name: playerName,
            clearTime: clearTime,
            createdAt: new Date()
        });

        res.json({
            success: true,
            player: playerName,
            clearTime: clearTime
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false
        });
    }
});

// 排行榜
// 排行榜
server.get("/ranking", async (req, res) => {
    try {
        var data = await Games.find({}).sort({ clearTime: 1 });
        var latest = await Games.findOne({}).sort({ createdAt: -1 });

        var rows = data.map((item, index) => {
            var isLatest = latest && item._id === latest._id;

            return `
<tr class="${isLatest ? "latest" : ""}">
    <td>${index + 1}</td>
    <td>${item.name}${isLatest ? "（你）" : ""}</td>
    <td>${item.clearTime} 秒</td>
</tr>`;
        }).join("");

        res.send(`
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<title>排行榜</title>
<style>
body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(135deg, #0f172a, #1e293b, #020617);
    color: white;
    font-family: "Microsoft JhengHei", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card {
    width: 620px;
    padding: 40px;
    border-radius: 20px;
    background: rgba(255,255,255,0.08);
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.2);
}
h1 {
    text-align: center;
    color: #facc15;
}
.current {
    text-align: center;
    margin-bottom: 25px;
    color: #facc15;
    font-size: 20px;
    font-weight: bold;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    padding: 14px;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,0.15);
}
th {
    color: #38bdf8;
}
.latest {
    background: rgba(250, 204, 21, 0.18);
    color: #facc15;
    font-weight: bold;
}
</style>
</head>
<body>
<div class="card">
    <h1>通關排行榜</h1>

    <div class="current">
        你是：${latest ? latest.name : "尚未上傳"}
    </div>

    <table>
        <tr>
            <th>排名</th>
            <th>玩家</th>
            <th>通關時間</th>
        </tr>
        ${rows}
    </table>
</div>
</body>
</html>
        `);

    } catch (err) {
        console.log(err);
        res.status(500).send("ERROR");
    }
});

server.listen(80, () => {
    console.log("Server running on port 80");
});