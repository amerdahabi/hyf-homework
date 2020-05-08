// Movies exercise

const api = `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`;
fetch(api)
  .then(response => response.json())
  .then(data => {
    let lowRating = data.filter(mov => mov.rating <= 4);
     //console.log(lowRating);
    let badMovies2000 = lowRating.filter(mov => mov.year >= 2000);
     //console.log(badMovies2000);
    let badMoviesTitle = badMovies2000.map(mov => mov.title);
     //console.log(badMoviesTitle);
  });

// Promise that resolves after set time

function myDelayFunc(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`I am called asynchronously after ${delay} seconds`);
    }, delay * 1000);
  });
}
myDelayFunc(6).then(result => console.log(result));
/* or 
const myFun = function (later){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("i'm the new one")
        }, later * 1000)
    })
}
myFun(3).then(m => console.log(m));
*/

// Rewrite time

function setTimeoutPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("called after 3 sec");
});

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      getPosition => {
        resolve(getPosition);
      },
      cantGetPosition => {
        reject(cantGetPosition);
      }
    );
  });
}
getCurrentLocation()
  .then(getPosition => {
    console.log(getPosition);
  })
  .catch(error => {
    console.log(error);
  });

// Fetching and waiting

function getData() {
  const url = `https://yesno.wtf/api/`;
  return new Promise(resolve => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          resolve(data);
        }, 3000);
      });
  });
}
getData().then(s => console.log(s));
