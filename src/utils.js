
export const randomLotteryNums = (length=6, min=1, max=69, powerNumMax=26) => {
  let nums = [];

  for (let i = 0; i < length; i++) {
    if (i === length - 1) max = powerNumMax;
    nums.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return nums;
}

export const compareLotteryNums = (set1, set2) => {
  let matches = [];

  set1.forEach((num, idx) => {
    if (num === set2[idx]) matches.push(num);
  });
  
  // console.log(`${matches.length} matches ${matches.length > 0 ? matches : ''}`);
  return matches.length;
}