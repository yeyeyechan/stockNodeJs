import { scheduleJob } from "node-schedule";
import {
  disparity,
  fluctuation,
  offTimeBalance,
  testRanking,
  volumePower,
} from "../utils/ranking.mjs";

const rankingScheduler = () => {
  console.log("scheduleJob start");

  scheduleJob("*/10 * * * * *", async function () {
    //const result = await testRanking();
    console.log("scheduleJob fluctuation");
    const result = await fluctuation();
    if (result.rt_cd === "1") return;
    for (const data of result.output) {
      console.log(data["hts_kor_isnm"], data["data_rank"], data["prdy_vrss"]);
    }

    console.log("scheduleJob disparity");
    const disparityData = await disparity();
    if (disparityData.rt_cd === "1") return;
    for (const data of disparityData.output) {
      console.log(
        data["hts_kor_isnm"],
        data["d5_dsrt"],
        data["d10_dsrt"],
        data["d20_dsrt"],
        data["d120_dsrt"]
      );
    }
    //console.log("scheduleJob offTimeBalanceData");
    /* console.log("volume Power");
    const volumePowerData = await volumePower();
    if (volumePowerData.rt_cd === "1") return;
    for (const data of volumePowerData.output) {
      console.log(
        data["hts_kor_isnm"],
        data["data_rank"],
        data["prdy_vrss"],
        data["tday_rltv"]
      );
    }*/
    /*const offTimeBalanceData = await offTimeBalance();
    for (const data of offTimeBalanceData.output) {
      console.log(data["hts_kor_isnm"]);
    }*/
    //console.log(result);
  });
};

export default rankingScheduler;
