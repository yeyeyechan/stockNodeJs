import htApiCallJs from "./commonCall.mjs";
import url from "../conf/url.mjs";
import redisCli from "./redis.mjs";
const getAccessToken = async () => {
  const { oauth } = url();
  const { setCache, removeCache, getCache } = redisCli();
  let accessTokenData = await getCache("accessTokenData");
  if (accessTokenData) accessTokenData = JSON.parse(accessTokenData);

  if (
    !accessTokenData ||
    !checkExpire(accessTokenData.access_token_token_expired)
  ) {
    console.log("accessToken 만료");
    accessTokenData = await htApiCallJs({
      method: "POST",
      params: { grant_type: "client_credentials" },
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      paramKeyFlag: true,
      headerKeyFlag: false,

      baseUrl: oauth["tokenP"],
    });

    setCache("accessTokenData", accessTokenData);
    return accessTokenData.access_token;
  }
  return accessTokenData.access_token;
};

const checkExpire = (expireTime) => {
  const expireMilliSec = Date.parse(expireTime);
  const nowMilliSec = new Date().getTime();

  return expireMilliSec > nowMilliSec;
};

export default getAccessToken;
