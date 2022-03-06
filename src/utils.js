
export const randomLotteryNums = (length=6, min=1, max=69, powerNumMax=26) => {
  let nums = [];

  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      max = powerNumMax;
    }

    nums.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  // console.log(nums);
  return nums;
}