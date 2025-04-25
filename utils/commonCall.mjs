import apiDomain from "../conf/domain.mjs";
import secret from "../conf/secret.mjs";
import axios from "axios";
import https from "https";

const agent = new https.Agent({ rejectUnauthorized: false });

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
    data: JSON.stringify(realParams),
  };
  //console.log(config);

  return await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      console.log(typeof callback === "function");
      if (typeof callback === "function") {
        callback(response);
      }

      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export default htApiCallJs;
