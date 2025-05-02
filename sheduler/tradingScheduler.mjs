import { scheduleJob } from "node-schedule";
import { inquireBalance, inquireAccountBalance } from "../utils/trading.mjs";

const tradingScheduler = () => {
  scheduleJob("*/10 * * * * *", async function () {
    /*console.log("scheduleJob balance");
    const inquireBalanceData = await inquireBalance();
    console.log(inquireBalanceData);*/

    console.log("scheduleJob inquireAccountBalance");
    const inquireAccountBalanceData = await inquireAccountBalance();
    console.log(inquireAccountBalanceData);
  });
};

export default tradingScheduler;
