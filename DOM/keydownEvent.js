// HTML
// <input id="textBox" type="text" />
// <div id="output"></div>

// JS
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
