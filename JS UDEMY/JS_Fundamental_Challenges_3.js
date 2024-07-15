let arr = [17, 21, 23, 8, 9];

const printForcast = function (data) {
  let str = "";
  for (var i = 1; i <= data.length; i++) {
    str += `${data[i]}*C in ${[i]} ${i === 1 ? "day" : "days"} `;
  }
  //const arrString = arr.join(",");
  console.log(str);
};
printForcast(arr);
