import ranking from "../router/ranking.mjs";

const url = () => {
  return {
    oauth: {
      tokenP: "/oauth2/tokenP",
    },
    ranking: {
      fluctuation: "/uapi/domestic-stock/v1/ranking/fluctuation",
      offTimeBalance: "/uapi/domestic-stock/v1/ranking/after-hour-balance",
      volumePower: "/uapi/domestic-stock/v1/ranking/volume-power",
      disparity: "/uapi/domestic-stock/v1/ranking/disparity",
    },
    trading: {
      inquireBalance: "/uapi/domestic-stock/v1/trading/inquire-balance",
      inquireAccountBalance:
        "/uapi/domestic-stock/v1/trading/inquire-account-balance",
    },
    quotation: {
      captureUpLowPrice:
        "/uapi/domestic-stock/v1/quotations/capture-uplowprice",
      inquireAccountBalance:
        "/uapi/domestic-stock/v1/trading/inquire-account-balance",
    },
  };
};
export default url;
