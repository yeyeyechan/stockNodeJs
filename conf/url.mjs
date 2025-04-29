import ranking from "../router/ranking.mjs";

const url = () => {
  return {
    oauth: {
      tokenP: "/oauth2/tokenP",
    },
    ranking: {
      fluctuation: "/uapi/domestic-stock/v1/ranking/fluctuation",
    },
  };
};
export default url;
