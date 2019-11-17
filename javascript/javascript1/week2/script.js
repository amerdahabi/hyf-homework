
//Flight booking fullname function, in this exercise 

function getFullName(firstname, lastname, useFormalName) {

    if ((firstname !== '' || lastname !== '') && useFormalName) {
        return "Lord " + " " + firstname + " " + lastname;
    }
    else if (!firstname && !lastname) {
        return console.log("Plese enter your first or last name");
    }
    else {
        return firstname + " " + lastname;
    }
}

console.log(getFullName("Amer", "Dahabi", false));
console.log(getFullName("Alix", "Gah", true));


// Event day 


function getEventWeekday(eventDate) {
    let day = new Date();
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let remainder = weekDays[(eventDate + day.getDay()) % (weekDays.length)]
    console.log("Your event will held on " + remainder);
}

console.log(getEventWeekday(10));


// weathercostum

function clothesToWear(degree) {
    if (degree >= 25) {
        console.log("It's summer time wear shorts and cut ");
    }
    else if (degree >= 10 && degree < 25) {
        console.log("Spring weather, wear a short and a light jacket ");
    }
    else if (degree >= 0 && degree < 10) {
        console.log("It's cold wear a winter jacket and maybe thick pants");
    }
    else {
        console.log("It's freezing wear all your closet");
    }
}

console.log(clothesToWear(30));

// addStudent to function

const class07Students = [];
function addStudentToClass(studentName) {
    // You write code here
    if (class07Students.length >= 5 && (studentName.toLowerCase() === 'queen')) {
        class07Students.push(studentName);
    }
    else if (!studentName) {
        console.log('Please enter your name');
    }
    else if (class07Students.length > 5) {
        console.log("This class is full, try another one");
    }
    else if (class07Students.includes(studentName) === true) {
        console.log('You are allready in the class');
    }
    else if (class07Students.length <= 5) {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    // You write code here
    let calssStudents = class07Students.length;
    console.log(`We are ${calssStudents} students `);
}

addStudentToClass('Amer1');
addStudentToClass('Amer1');
addStudentToClass('Amer2');
addStudentToClass('Amer3');
addStudentToClass('Amer4');
addStudentToClass('Amer5');
addStudentToClass('Amer6');
addStudentToClass('Amer7');
addStudentToClass('');
addStudentToClass('QUEEN');

getNumberOfStudents();


// to be continued ... 