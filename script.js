let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let lapCount=0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
    isRunning = false;
  } else {
    timer = setInterval(runTimer, 10);
    document.getElementById("startStop").textContent = "Stop";
    isRunning = true;
  }
}

function runTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  document.getElementById("display").textContent =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}
function lap() {
    lapCount++;
    let lapTime = document.getElementById("display").textContent;
    let lapList = document.getElementById("laps");
    let li = document.createElement("li");
    li.textContent = "Lap " + lapCount + ": " + lapTime;
    lapList.appendChild(li);
  }

function reset() {
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("laps").innerHTML="";
  isRunning = false;
}
