const checkExpire = (expireTime) => {
  const expireMilliSec = Date.parse(expireTime);

  return expireMilliSec > nowMilliSec;
};
