//step one
let yearOfBirth = 1986; // number literal
let yearFuture = 2020;
let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture + ".");
//step one completed


//step two
const dogYearOfBirth = 2015;
let dogYearFuture = 2025;
let dogYear = dogYearFuture - dogYearOfBirth;
let souldShowResaultInDogYears = false; //boolean literal

if (souldShowResaultInDogYears) {
    dogYear = (dogYearFuture - dogYearOfBirth) * 7;
}

console.log( `Your dog will be ${dogYear} ${souldShowResaultInDogYears ? "dog" : "human"} years old in ${dogYearFuture}.`);
//step two completed

//step three
const wideMeter = 5;
const deebMeter = 11;
const highMeter = 8;
let volumeInMeters = wideMeter * deebMeter * highMeter;
const gardenSizeInM2 = 70;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log(housePrice);
//step three completed

//step four in progress ...

