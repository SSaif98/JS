const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calc(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max);
  return max - min;
}

const amp = calc(temps);
console.log(amp);

const measurmentKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degree Celsius"),
  };

  const kelvin = Number(measurment.value) + 273;
  return kelvin;
};

console.log(measurmentKelvin());
