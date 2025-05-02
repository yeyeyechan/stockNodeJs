import url from "../conf/url.mjs";
import getAccessToken from "./oauth.mjs";
import htApiCallJs from "./commonCall.mjs";
const { trading } = url();
export const inquireAccountBalance = async () => {
  const authorization = await getAccessToken();
  console.log("inquireAccountBalance authorization");
  console.log(authorization);

  const inquireAccountBalanceData = await htApiCallJs({
    method: "GET",
    params: {
      CANO: "47004660",
      ACNT_PRDT_CD: "01",
      INQR_DVSN_1: "",
      BSPR_BF_DT_APLY_YN: "",
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${authorization}`,
      tr_id: "CTRP6548R",
      tr_cont: "",
      custtype: "P",
    },
    paramKeyFlag: false,
    headerKeyFlag: true,

    baseUrl: trading["inquireAccountBalance"],
  });
  return inquireAccountBalanceData;
};

export const inquireBalance = async () => {
  const authorization = await getAccessToken();
  console.log("inquireBalance authorization");
  console.log(authorization);

  const inquireBalanceData = await htApiCallJs({
    method: "GET",
    params: {
      CANO: "47004660",
      ACNT_PRDT_CD: "01",
      AFHR_FLPR_YN: "N",
      OFL_YN: "",
      INQR_DVSN: "02",
      UNPR_DVSN: "01",
      FUND_STTL_ICLD_YN: "N",
      FNCG_AMT_AUTO_RDPT_YN: "N",
      PRCS_DVSN: "00",
      CTX_AREA_FK100: "",
      CTX_AREA_NK100: "",
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${authorization}`,
      tr_id: "TTTC8434R",
      tr_cont: "",
      custtype: "P",
    },
    paramKeyFlag: false,
    headerKeyFlag: true,

    baseUrl: trading["inquireBalance"],
  });
  return inquireBalanceData;
};
