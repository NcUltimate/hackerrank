/**
 * https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-elements-greater-than-previous-average/problem
 **/
function countResponseTimeRegressions(responseTimes) {
  if (responseTimes.length <= 1) {
    return 0;
  }
  
  let regressionCount = 0;
  let runningTotal = responseTimes[0];

  for (let t = 1; t < responseTimes.length; t++) {
    const currentTime = responseTimes[t];
    if (currentTime > runningTotal / t) {
      regressionCount++;
    }

    runningTotal += currentTime;
  }
  
  return regressionCount;
}
