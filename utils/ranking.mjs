import getAccessToken from "../utils/oauth.mjs";
import url from "../conf/url.mjs";
import htApiCallJs from "./commonCall.mjs";
import axios from "axios";
const { ranking } = url();

export const disparity = async () => {
  const authorization = await getAccessToken();
  console.log("disparity authorization");
  console.log(authorization);

  const disparityData = await htApiCallJs({
    method: "GET",
    params: {
      fid_input_price_2: "",
      fid_cond_mrkt_div_code: "J",
      fid_cond_scr_div_code: "20178",
      fid_div_cls_code: "0",
      fid_rank_sort_cls_code: "0",
      fid_trgt_exls_cls_code: "0",

      fid_hour_cls_code: "120",
      fid_input_iscd: "0000",
      fid_trgt_cls_code: "0",

      fid_input_price_1: "",
      fid_vol_cnt: "1000000",
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${authorization}`,
      tr_id: "FHPST01780000",
      tr_cont: "",
      custtype: "P",
    },
    paramKeyFlag: false,
    headerKeyFlag: true,

    baseUrl: ranking["disparity"],
  });
  return disparityData;
};
export const volumePower = async () => {
  const authorization = await getAccessToken();
  console.log("volumePower authorization");
  console.log(authorization);

  const volumePowerData = await htApiCallJs({
    method: "GET",
    params: {
      fid_trgt_exls_cls_code: "0",
      fid_cond_mrkt_div_code: "J",
      fid_cond_scr_div_code: "20168",
      fid_input_iscd: "0000",
      fid_div_cls_code: "1",
      fid_input_price_1: "10000",
      fid_input_price_2: "",
      fid_vol_cnt: "",
      fid_trgt_cls_code: "0",
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${authorization}`,
      tr_id: "FHPST01680000",
      tr_cont: "",
      custtype: "P",
    },
    paramKeyFlag: false,
    headerKeyFlag: true,

    baseUrl: ranking["volumePower"],
  });
  return volumePowerData;
};
export const fluctuation = async () => {
  const authorization = await getAccessToken();
  console.log("fluctuation authorization");
  console.log(authorization);

  const fluctuationData = await htApiCallJs({
    method: "GET",
    params: {
      fid_rsfl_rate2: "",
      fid_cond_mrkt_div_code: "J",
      fid_cond_scr_div_code: "20170",
      fid_input_iscd: "120",
      fid_rank_sort_cls_code: "0",
      fid_input_cnt_1: "1",
      fid_prc_cls_code: "1",
      fid_input_price_1: "10000",
      fid_input_price_2: "",
      fid_vol_cnt: "",
      fid_trgt_cls_code: "0",
      fid_trgt_exls_cls_code: "0",
      fid_div_cls_code: "0",
      fid_rsfl_rate1: "",
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${authorization}`,
      tr_id: "FHPST01700000",
      tr_cont: "",
      custtype: "P",
    },
    paramKeyFlag: false,
    headerKeyFlag: true,

    baseUrl: ranking["fluctuation"],
  });
  return fluctuationData;
};
export const offTimeBalance = async () => {
  const authorization = await getAccessToken();
  console.log("after_hour_balance authorization");
  console.log(authorization);

  const balanceData = await htApiCallJs({
    method: "GET",
    params: {
      fid_input_price_1: "",
      fid_cond_mrkt_div_code: "J",
      fid_cond_scr_div_code: "20176",
      fid_div_cls_code: "0",
      fid_input_iscd: "0000",
      fid_rank_sort_cls_code: "1",
      fid_trgt_exls_cls_code: "0",
      fid_trgt_cls_code: "1",
      fid_vol_cnt: "",
      fid_input_price_2: "",
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${authorization}`,
      tr_id: "FHPST01760000",
      tr_cont: "",
      custtype: "P",
    },
    paramKeyFlag: false,
    headerKeyFlag: true,

    baseUrl: ranking["offTimeBalance"],
  });
  return balanceData;
};
export const testRanking = () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://openapi.koreainvestment.com:9443/uapi/domestic-stock/v1/ranking/fluctuation?fid_cond_mrkt_div_code=J&fid_cond_scr_div_code=20170&fid_input_iscd=0000&fid_rank_sort_cls_code=0&fid_input_cnt_1=0&fid_prc_cls_code=0&fid_input_price_1=&fid_input_price_2=&fid_vol_cnt=&fid_trgt_cls_code=0&fid_trgt_exls_cls_code=0&fid_div_cls_code=0&fid_rsfl_rate1=&fid_rsfl_rate2=",
    headers: {
      "content-type": "application/json",
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b2tlbiIsImF1ZCI6Ijc1NWYwMzlkLTcwMzAtNGRhMi05ZjA4LTNjNWU2ZjFjNTQ3MCIsInByZHRfY2QiOiIiLCJpc3MiOiJ1bm9ndyIsImV4cCI6MTc0NjAwMjEzNiwiaWF0IjoxNzQ1OTE1NzM2LCJqdGkiOiJQU2hWaXFNNnNMUWxSVlJTSTZ4eDROWUpDNEZSS3Jvb3FYalgifQ.JHuB2cUe734QmtH1mkyfIiC2fngwNvclpe-jHfLB2HxnZEDcnZqdgzxknOPQrTHdAaOfgiKLBwQOQGUqI5b7DQ",
      appkey: "PShViqM6sLQlRVRSI6xx4NYJC4FRKrooqXjX",
      appsecret:
        "PLnISz/QDHKnkqYXGVtJyU6hHt8tI5/Ml76CDL4WhnKXzDcLxsemTD4tCK4XLJVcf52n/3I8BoYAsyTF+sYEpyrsp74XzYCU8foG7rmUcbFmX2bsbrFAbniQD8TbiIYMztiL2GziPsqlK63L8vKfm4M4UclOFmHDk2XDbxFHroQUP0nArOE=",
      tr_id: "FHPST01700000",
      custtype: "P",
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export default fluctuation;
