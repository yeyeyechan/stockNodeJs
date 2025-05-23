import express from "express";
import getAccessToken from "../utils/oauth.mjs";
import axios from "axios";
import fluctuation from "../utils/ranking.mjs";
const ranking = () => {
  const router = express.Router();

  router.post("/fluctuation", async (req, res) => {
    const authorization = await getAccessToken();
    console.log("fluctuation authorization");
    console.log(authorization);

    console.log("api call fluctuation");
    const result = await fluctuation();
    console.log("fluctuation result");
    console.log(result);
    if (result.rt_cd === "1") return;
    for (const data of result.output) {
      console.log(data["hts_kor_isnm"], data["data_rank"], data["prdy_vrss"]);
    }

    res.send(result);
  });
  return router;
};

export default ranking;
