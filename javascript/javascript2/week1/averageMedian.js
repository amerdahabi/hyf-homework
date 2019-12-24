const housePrices = [
  3000000,
  3500000,
  1300000,
  40000000,
  100000000,
  8000000,
  2100000
];

function averageFn(housePrices) {
  let sum = housePrices.reduce((a, b) => (b += a));
  let resault = sum / housePrices.length;
  resault = resault.toFixed(2);
  return resault;
}

let averageResault = averageFn(housePrices);
console.log(averageResault);

function medianFn(housePrices) {
  housePrices.sort((c, d) => c - d);
  let lowMid = Math.floor((housePrices.length - 1) / 2);
  let highMid = Math.ceil((housePrices.length - 1) / 2);
  let median = (housePrices[lowMid] + housePrices[highMid]) / 2;
  return median;
}

let medianResault = medianFn(housePrices);
console.log(medianResault);

function avrAndMedFn(housePrices) {
  let averageObj = averageFn(housePrices);
  let medianObj = medianFn(housePrices);
  return { average: averageObj, median: medianObj };
}
let averageAndMedian = avrAndMedFn(housePrices);
console.log(averageAndMedian);

const root = document.getElementById("root");

const header = document.createElement("h1");
root.appendChild(header);
header.innerHTML = "Difference between median and average";

const p1 = document.createElement("p1");
root.appendChild(p1);
p1.innerHTML = `The house psicese is ${housePrices}`;

const br = document.createElement("br");
root.appendChild(br);

const p2 = document.createElement("p2");
root.appendChild(p2);
p2.innerHTML = `The average of the hoses prices is ${averageAndMedian.average}`;

const br2 = document.createElement("br");
root.appendChild(br2);

const p3 = document.createElement("p3");
root.appendChild(p3);
p3.innerHTML = `The median of prices is ${averageAndMedian.median}`;
