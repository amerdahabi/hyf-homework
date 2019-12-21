
// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => {
    console.log('Called after 2.5 seconds')
} , 2500);

// Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds. 
//Call the function you have created with some different arguments.

function stringAfterDelay(delay, stringTolog){
    setTimeout(() => {
        console.log(stringTolog)
    }, delay * 1000)
}
stringAfterDelay(5, 'this string will log after 5 sec');


// Create a button in html. When clicking this button, 
//use the function you created in the previous task to log out the 
//text: Called after 5 seconds 5 seconds after the button is clicked.

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', buttun1);

function buttun1(){
    stringAfterDelay(5, 'Called after 5 seconds')
}

//Create two functions and assign them to two different variables. One function logs out Earth,
// the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction.
// The only thing the third function should do is call the provided parameter function. 
//Try call the third function once with the Earth function and once with the Saturn function.

const earth = () => {
    console.log('1st func Earth')
}

const saturn = () => {
    console.log('2nd func Saturn')
}

function planetToLog (planet){
    return planet();
}
planetToLog(earth);
planetToLog(saturn);

//Create a button with the text called "Log location". When this button is clicked the location
// (latitude, longitude) of the user should be logged out using this browser api

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', findMe);

function findMe(){
    navigator.geolocation.getCurrentPosition(position => {
    console.log('The latitude ' + position.coords.latitude.toFixed(5));
    console.log('The latitude ' + position.coords.longitude.toFixed(5));
})
}