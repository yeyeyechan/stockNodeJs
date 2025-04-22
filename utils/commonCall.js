import secret from "../conf/secret";
import domain from "../conf/domain";
const htApiCallJs = ({
  baseUrl,
  method,
  params,
  paramKeyFlag,
  headerKeyFlag,
  headers,
  callback,
}) => {
  const queryString = new URLSearchParams(params).toString();
  const { appkey, appsecret } = secret();
  const { domain } = domain();
  const requestUrl =
    method === "GET"
      ? `${domain}${baseUrl}?${queryString}`
      : `${domain}${baseUrl}`;
  const realParams =
    method === "POST"
      ? paramKeyFlag
        ? { ...params, appkey, appsecret }
        : { ...params }
      : {};

  const realHeaders = headerKeyFlag
    ? { ...headers, appkey, appsecret }
    : { ...headers };
  fetch(requestUrl, {
    method: method,
    headers: realHeaders,
    body: JSON.stringify(realParams),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (typeof callback === "function") {
        callback(data);
      }
      return data;
    });
  return "";
};
export default htApiCallJs;
