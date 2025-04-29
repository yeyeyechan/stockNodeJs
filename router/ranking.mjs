import express from "express";
import getAccessToken from "../utils/oauth.mjs";
import axios from "axios";
const ranking = () => {
  const router = express.Router();

  router.get("/fluctuation", async (req, res) => {
    const authorization = await getAccessToken();
    console.log("fluctuation authorization");
    console.log(authorization);
    res.send("Hello world");
  });
  return router;
};

export default ranking;
