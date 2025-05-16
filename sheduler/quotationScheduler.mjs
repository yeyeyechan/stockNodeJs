import { scheduleJob } from "node-schedule";
import captureUpLowPrice from "../utils/quotation.mjs";
const quotationScheduler = () => {
  console.log("scheduleJob start");

  scheduleJob("*/5 * * * * *", async function () {
    //const result = await testRanking();
    console.log("scheduleJob fluctuation");
    const result = await captureUpLowPrice();
    if (result.rt_cd === "1") return;
    for (const data of result.output) {
      console.log(data["hts_kor_isnm"]);
    }

    console.log("captureUpLowPrice end");
  });
};

export default quotationScheduler;
