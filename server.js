const express = require("express");
const app = express();
const port = 3000;

const ranking = require("./router/ranking");
const oauth = require("./router/oauth");

app.get("/v1/getReal", (req, res) => {
  res.send("안녕하세요, 세계!");
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});

app.use("/ranking", ranking);
app.use("/oauth2", oauth);
