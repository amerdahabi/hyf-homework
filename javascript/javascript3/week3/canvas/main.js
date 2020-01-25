console.log("Hello Canvas");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Class creation time!

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillColor
    );
    ctx.stroke();
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

const c1 = new Circle(50, 150, 20, 0, 2 * Math.PI, "#000000");
//c1.draw();

// Now lets make art!

setInterval(() => {
  const randomX = Math.floor(Math.random() * canvas.width);
  const randomY = Math.floor(Math.random() * canvas.height);
  const randomR = Math.floor(Math.random() * 20);
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const c2 = new Circle(randomX, randomY, randomR, 0, 2 * Math.PI, randomColor);
  c2.draw();
}, 500);

// Follow the mouse - optional

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener("mousemove", mousePosition);

function mousePosition(e) {
  mouseX = e.clientX - ctx.canvas.offsetLeft;
  mouseY = e.clientY - ctx.canvas.offsetTop;
  const randomR = Math.floor(Math.random() * 20);
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const c3 = new Circle(mouseX, mouseY, randomR, 0, 2 * Math.PI, randomColor);
  //c3.draw();
}
