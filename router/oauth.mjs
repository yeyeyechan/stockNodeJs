import url from "../conf/url.mjs";
import htApiCallJs from "../utils/commonCall.mjs";
import express from "express";
import getAccessToken from "../utils/oauth.mjs";
const oauth = () => {
  const router = express.Router();
  const { oauth } = url();
  router.post("/tokenP", async (req, res) => {
    const body = req.body;
    const result = await getAccessToken();
    console.log(result);
    res.send(result);
    /*await htApiCallJs({
      ...body,
      baseUrl: oauth["tokenP"],
      callback: (data) => {
        console.log(data);
        //res.send(data);
      },
    });*/
  });
  return router;
};

export default oauth;
