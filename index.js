let availableStorage = 1000;
let used = 815;
let left = availableStorage - used;

// slider value
const usedSlider = document.getElementById("used-slider");
usedSlider.setAttribute("value", used);

// slider dot position
const dot = document.getElementById("dot");
let usedPercentage = (used / availableStorage) * 100;
if (usedPercentage < 10) {
  dot.setAttribute("style", "display: none");
} else if (usedPercentage >= 10 && usedPercentage < 30) {
  dot.setAttribute("style", `left: calc(${usedPercentage}% - 10px)`);
} else {
  dot.setAttribute("style", `left: calc(${usedPercentage}% - 15px)`);
}

// populate used
const usedDisplay = document.getElementById("used");
usedDisplay.textContent = used;

// populate left
const leftDisplay = document.getElementById("left");
leftDisplay.innerText = left;
