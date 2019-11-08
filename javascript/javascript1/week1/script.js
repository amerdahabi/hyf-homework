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


//step three fixed
let volumeInMetersFirst = 5 * 8 * 11;
let gardenSizeInM2First = 70;
let housePriceFirst = 1000000;
let housePriceShouldBeFirst = volumeInMetersFirst * 2.5 * 1000 + gardenSizeInM2First * 300;
let savePriceFirst = housePriceFirst - housePriceShouldBeFirst;
if (housePriceFirst > housePriceShouldBeFirst){
    console.log("I guess you have to reconsider your choice because the value of the is " + housePriceShouldBeFirst);
}
else {console.log("I think it's a good choice to get it, its value on market " + housePriceShouldBeFirst + " and you will save around " + savePriceFirst + ".");
} //price for the first peron end.

let volumeInMetersSecond = 8 * 10 * 10;
let gardenSizeInM2Second = 100;
let housePriceSecond = 2500000;
let housePriceShouldBeSecond = volumeInMetersSecond * 2.5 * 1000 + gardenSizeInM2Second * 300;
let savePriceSecond = housePriceSecond - housePriceShouldBeSecond;
if (housePriceSecond > housePriceShouldBeSecond){
    console.log("I guess you have to reconsider your choice because the value of the is " + housePriceShouldBeSecond);
}
else {console.log("I think it's a good choice to get it, its value on market " + housePriceShouldBeSecond + " and you will save around " + savePriceSecond + ".");
} //price for the second peron end.
//step three completed

//step four 
let firstWords = ["Easy ", "Nice ", "Big ", "Small ", "Strong ", "Fast ", "Awsome ", "Buetiful ", "Long ", "Winner " ]; // just very random names
let secondWords = ["Tech", "IT", "BigData", "JavaScript", "HTML", "CSS", "Mac", "JAVA", "Browser", "Data"]; // just very random names
let startUpName = firstWords[Math.floor((Math.random() * 10) + 0)] + secondWords[Math.floor((Math.random() * 10) + 0)];
let nameLenght = startUpName.length;

console.log('"' + startUpName + '"' + " contain " + nameLenght + " characters");
//step four completed
