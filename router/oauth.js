const express = require("express");
const router = express.Router();
import domain from "../conf/domain";
const { requestDomain } = domain();
router.post("/tokenP", (req, res) => {
  console.log(req);
  res.header("Access-Control-Allow-Origin", requestDomain);
  res.send("Hello world");
});
module.exports = router;
