let redBox = document.querySelector("ul.marks li:nth-child(1)");
let blueBox = document.querySelector("ul.marks li:nth-child(2)");
let greenBox = document.querySelector("ul.marks li:nth-child(3)");

function translateOneByOne(){
  moveElement(redBox, {x: 20, y: 300})
  .then(() => {
    console.log("Red Element has been moved")
    return moveElement(blueBox, {x: 400, y:300})
  })
  .then(() => {
    console.log("Blue Element has been moved")
    return moveElement(greenBox, {x:400, y:20})
  })
  .then(() => {console.log("Green Element has been moved")})
}
//translateOneByOne();

function translateAllAtOnce(){
  Promise.all([
    moveElement(redBox, {x: 20, y: 300}),
    moveElement(blueBox, {x: 400, y:300}),
    moveElement(greenBox, {x:400, y:20})
    .then(() => {
      console.log("All elemnts moved")
    })
  ])
}
translateAllAtOnce();