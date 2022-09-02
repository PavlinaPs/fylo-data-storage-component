let availableStorage = 1000;
let used = 815;
let left = availableStorage - used;

// slider value
let usedSlider = document.getElementById("used-slider");
usedSlider.setAttribute("value", used);

// slider dot, calculated % minus approx 6% dot width to fit the bar
let dotPosition;

if (window.innerWidth < 600) {
  dotPosition = (used / availableStorage) * 100 - 6;
}

if (window.innerWidth >= 600) {
  dotPosition = (used / availableStorage) * 100 - 3;
}

let dot = document.getElementById("dot");
dot.style.left = dotPosition + "%";

// populate used
const usedDisplay = document.getElementById("used");
usedDisplay.textContent = used;

// populate left
const leftDisplay = document.getElementById("left");
leftDisplay.innerText = left;
