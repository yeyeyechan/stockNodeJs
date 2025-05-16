import url from "../conf/url.mjs";
import getAccessToken from "./oauth.mjs";
import htApiCallJs from "./commonCall.mjs";
const captureUpLowPrice = async () => {
  const { quotation } = url();

  const authorization = await getAccessToken();
  console.log("captureUpLowPrice authorization");
  console.log(authorization);

  const captureUpLowPriceData = await htApiCallJs({
    method: "GET",
    params: {
      FID_COND_MRKT_DIV_CODE: "J",
      FID_COND_SCR_DIV_CODE: "11300",
      FID_PRC_CLS_CODE: "0",
      FID_DIV_CLS_CODE: "6",
      FID_INPUT_ISCD: "0000",
      FID_TRGT_CLS_CODE: "",
      FID_TRGT_EXLS_CLS_CODE: "",
      FID_INPUT_PRICE_1: "",
      FID_INPUT_PRICE_2: "",
      FID_VOL_CNT: "",
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${authorization}`,
      tr_id: "FHKST130000C0",
      tr_cont: "",
      custtype: "P",
    },
    paramKeyFlag: false,
    headerKeyFlag: true,

    baseUrl: quotation["captureUpLowPrice"],
  });
  return captureUpLowPriceData;
};

export default captureUpLowPrice;
