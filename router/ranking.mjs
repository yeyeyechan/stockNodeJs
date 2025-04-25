import express from "express";

const ranking = () => {
  const router = express.Router();

  router.get("/fluctuation", (req, res) => {
    res.send("Hello world");
  });
  return router;
};
export default ranking;
