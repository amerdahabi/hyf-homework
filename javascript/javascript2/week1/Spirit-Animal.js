const spiritAnimal = [
  "The fast turtle",
  "The big rabbit",
  "The small whale",
  "The strong spider"
];

const btn = document
  .getElementById("btn")
  .addEventListener("click", spiritFunc);

const text = document.createElement("input");
text.setAttribute("input", "text");
text.setAttribute("value", "");
document.body.appendChild(text);

function spiritFunc() {
  const spiritRandom =
    spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
  if (text.value.length <= 2) {
    alert("Please Enter Your Name");
  } else {
    let p1 = document.createElement("p");
    document.body.appendChild(p1);
    p1.innerHTML = `${text.value} - ${spiritRandom}`;
  }
}

const btn2 = document.getElementById("btn2").addEventListener("click", funPush);

const textPush = document.createElement("input");
textPush.setAttribute("input", "text");
textPush.setAttribute("value", "");
document.body.appendChild(textPush);

function funPush() {
  if (textPush.value.length >= 5) {
    spiritAnimal.push(textPush.value);
  } else {
    alert("Please Enter More Details");
  }
}
