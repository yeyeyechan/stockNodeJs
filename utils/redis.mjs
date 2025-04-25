import dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config();

let redisV4;
console.log(process.env);
// Redis 인스턴스 생성
(async () => {
  const redis = new createClient({
    legacyMode: true, // 반드시 설정 !!
  });
  /*onst redis = new createClient({
    url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`,
    legacyMode: true, // 반드시 설정 !!
  });*/
  redis.on("error", (err) => {
    console.log(err);
  });
  redis.on("connect", () => {
    console.log("Redis connected!");
  });
  redis.connect().then(); // redis v4 연결 (비동기)

  redisV4 = redis.v4;
})();

const redisCli = () => {
  // Redis 캐시에서 키 데이터 가져오기
  async function getCache(key) {
    try {
      const cacheData = await redisV4.get(key);
      return cacheData;
    } catch (err) {
      return null;
    }
  }

  // 지정된 만료 시간으로 Redis 캐시 키 설정
  function setCache(key, data) {
    console.log(key, data);
    try {
      redisV4.set(key, JSON.stringify(data));
    } catch (err) {
      return null;
    }
  }

  // 주어진 Redis 캐시 키 제거
  function removeCache(key) {
    try {
      redisV4.del(key);
    } catch (err) {
      return null;
    }
  }
  return { getCache, setCache, removeCache };
};

export default redisCli;
