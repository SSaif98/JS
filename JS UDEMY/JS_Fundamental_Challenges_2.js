//Task#1

const calcAverage = (s1, s2, s3) => {
  let avg = (s1 + s2 + s3) / 3;
  return avg;
};

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(165, 254, 49);

function checkWinner(avgD, avgK) {
  if (avgD >= 2 * avgK) {
    console.log(`Dolphins win (${avgD} vs. ${avgK})`);
  } else if (avgK >= 2 * avgD) {
    console.log(`Koalas win (${avgK} vs. ${avgD})`);
  } else {
    console.log("No team wins");
  }
}

checkWinner(avgDolhins, avgKoalas);

//Task#2 & 4
const bills = [120, 145, 130, 500, 600, 200, 250, 350, 45, 100];
const calcTip = (bill) => {
  //  let count = 0
  let tip = [];
  for (var i = 0; i < bill.length; i++) {
    bill[i] >= 50 && bill[i] <= 300
      ? tip.push((bill[i] * 15) / 100)
      : tip.push((bill[i] * 20) / 100);

    // if (bill[i] >= 50 && bill[i] <= 300) {
    //     //        tip[count] = (bill[i] * 15 / 100)
    //     tip.push((bill[i] * 15 / 100))
    //     // count++
    // } else {
    //     //     tip[count] = (bill[i] * 20 / 100)
    //     tip.push((bill[i] * 20 / 100))
    //     //count++
    // }
  }
  let total = [];
  for (var i = 0; i < bill.length; i++) {
    // total[i] = tip[i] + bill[i]
    total.push(tip[i] + bill[i]);
  }
  return total;
};

const totalBill = calcTip(bills);
console.log(calcTip(bills));

function calcAverageNew(totalBill) {
  let sum = 0;
  for (var i = 0; i < totalBill.length; i++) {
    sum += totalBill[i];
  }
  return sum / totalBill.length;
}

const arr = [4, 9, 2, 3, 8, 10];

console.log(calcAverageNew(totalBill));

//Task#3

const markObj = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = Math.floor(this.mass / this.height ** 2);
    return this.BMI;
  },
};
const johnObj = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = Math.floor(this.mass / this.height ** 2);
    return this.BMI;
  },
};

console.log(
  `${
    johnObj.calcBMI() > markObj.calcBMI()
      ? "John's BMI " +
        johnObj.calcBMI() +
        " is higher than Mark's " +
        markObj.calcBMI() +
        "!"
      : "Mark's BMI " +
        markObj.calcBMI() +
        "is higher than John's " +
        johnObj.calcBMI() +
        "!"
  }`
);
