"use strict";
// Questions are found in the README file, answers are numbered within the code

const juliaDogs = [5, 2, 4, 1, 15, 8, 31];
const katieDogs = [16, 6, 10, 5, 6, 1, 4];
const ages = [];

const func = function (ages) {
  ages = [...juliaDogs, ...katieDogs];
  const calcAverageHumanAge = ages.map(function (age) {
    // 1)
    if (age >= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });

  // 2)
  const over18 = calcAverageHumanAge.filter((age) => age > 18);
  console.log(over18);

  //   3)
  const aveAge = calcAverageHumanAge.reduce((acc, curr) => acc + curr);
  console.log(aveAge / ages.length);
  return calcAverageHumanAge;
};

// 4
const funcMain = function (ages, fn) {
  console.log(fn(ages));
};
funcMain(ages, func);
