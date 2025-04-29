import express from "express";
import bodyParser from "body-parser";
import ranking from "./router/ranking.mjs";
import oauth from "./router/oauth.mjs";
import cors from "cors";
import { scheduleJob } from "node-schedule";
import rankingScheduler from "./sheduler/rankingScheduler.mjs";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

app.get("/v1/getReal", (req, res) => {
  res.send("안녕하세요, 세계!");
});
app.use("/ranking", ranking());
app.use("/oauth2", oauth());
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
  rankingScheduler();
});
