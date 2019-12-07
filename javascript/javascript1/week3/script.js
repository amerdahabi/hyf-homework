//Code 1  Item array removal
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
for(let i = 0; i < names.length; i++){
    if(names[i] === 'Ahmad'){
        names.splice(i, 1);
    }
}

console.log(names);
//Code 1 Done ===============================

//Code 2  When will we be there??
const travelInformation = {         
    speed: 73,
    destinationDistance: 472,
  }; 

 function timeToArrive (travelInformation){
     const speedInMin = travelInformation.speed / 60;
     const timeInMin = travelInformation.destinationDistance / speedInMin;
     const timeInHour = timeInMin / 60;
     const hours = Math.floor(timeInHour)
     const reminder = Math.floor(timeInMin % 60);
     const travelTime = 'Time to arrival is ' + hours + ' hours and ' + reminder + ' minutes';
     console.log(travelTime);
 }
 timeToArrive(travelInformation);
 //Code 2 Done ===============

 //Code 3  Series duration of my life
let theLife = 80 * 365 * 24 * 60; 
let sum = 0;
const seriesDurations = [
  {
    title: 'Breaking Bad',
    days: 1,
    hours: 22,
    minutes: 30,  
  },
  {
    title: 'Game Of Thrones',
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: 'Lost',
    days: 3,
    hours: 18,
    minutes: 20,
  }
]

for (let i = 0; i < seriesDurations.length; i++){
    let daysInMin = seriesDurations[i].days * 24 * 60;
    let hoursInMin = seriesDurations[i].hours * 60;
    let mins = seriesDurations[i].minutes;
    let totalTimeMin = daysInMin + hoursInMin + mins;
    let percentageSerialTime = (totalTimeMin / theLife) * 100;
    sum = sum + percentageSerialTime;
    console.log(seriesDurations[i].title + ' took ' + percentageSerialTime.toFixed(3) + ' % of my life' )
}
console.log('in total i spent ' + sum.toFixed(3) + ' % of my life watching series')
// Code 3 Done =================

//code 4 My favorite songs (in progress)....
