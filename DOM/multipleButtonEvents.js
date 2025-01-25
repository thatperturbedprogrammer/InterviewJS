// Add Event Listener to Multiple Buttons
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}

function bgChange(){
  // code to change bg-color
}
