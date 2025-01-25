function random(number){
  return Math.floor(Math.random() * (number + 1));
}

// Usage with DOM.
const btn = document.querySelector("button");

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
