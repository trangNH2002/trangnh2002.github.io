var progressElement = document.getElementById("my-progress");

function updateProgress(newValue) {
  progressElement.value = newValue;
}
let currentValue = 0;
const targetValue = 80;

function simulateProgress() {
  if (currentValue < targetValue) {
    currentValue++;
    updateProgress(currentValue);
    setTimeout(simulateProgress, 50);
  }
}

simulateProgress();
