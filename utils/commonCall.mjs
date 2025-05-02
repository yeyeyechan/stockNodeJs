import apiDomain from "../conf/domain.mjs";
import secret from "../conf/secret.mjs";
import axios from "axios";
import https from "https";
import redisCli from "./redis.mjs";
const agent = new https.Agent({ rejectUnauthorized: false });
const { setCache, removeCache, getCache } = redisCli();

const htApiCallJs = async ({
  baseUrl,
  method,
  params,
  paramKeyFlag,
  headerKeyFlag,
  headers,
  callback,
}) => {
  const { appkey, appsecret } = secret();
  const { domain } = apiDomain();
  const requestUrl =
    method === "GET"
      ? `${domain}${baseUrl}?${new URLSearchParams(params).toString()}`
      : `${domain}${baseUrl}`;
  const realParams =
    method === "POST"
      ? paramKeyFlag
        ? { ...params, appkey, appsecret, httpsAgent: agent }
        : { ...params, httpsAgent: agent }
      : {};
  const realHeaders = headerKeyFlag
    ? { ...headers, appkey, appsecret }
    : { ...headers };

  let config = {
    method: method,
    maxBodyLength: Infinity,
    url: requestUrl,
    headers: realHeaders,
  };
  if (method === "POST") config["data"] = JSON.stringify(realParams);
  //console.log(config);
  let apiCallData = await getCache("apiCallData");
  if (apiCallData) {
    apiCallData = JSON.parse(apiCallData);
    const nowMilliSec = new Date().getTime();

    if (nowMilliSec - apiCallData.callTime > 1000) {
      apiCallData.callTime = nowMilliSec;
    } else if (apiCallData.count >= 10) {
    }
  }

  return await axios
    .request(config)
    .then((response) => {
      //console.log(JSON.stringify(response.data));
      //console.log(typeof callback === "function");
      if (typeof callback === "function") {
        callback(response);
      }
      console.log(response.headers);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return response.data;
    });
};
function checkCallCount(jsonData) {
  let result = false;
  const nowMilliSec = new Date().getTime();
  if (jsonData.count >= 10) return false;
  nowMilliSec - jsonData.callTime > 1000;
}
export default htApiCallJs;
