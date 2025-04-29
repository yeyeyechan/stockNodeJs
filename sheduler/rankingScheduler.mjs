import { scheduleJob } from "node-schedule";
import { fluctuation, testRanking } from "../utils/ranking.mjs";

const rankingScheduler = () => {
  console.log("scheduleJob start");

  scheduleJob("*/10 * * * * *", async function () {
    //const result = await testRanking();
    const result = await fluctuation();
    console.log("scheduleJob");
    console.log(result);
  });
};

export default rankingScheduler;
