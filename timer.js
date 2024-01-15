let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
  const hrs = parseInt(document.getElementById("hoursInput").value, 10) || 0;
  const mins = parseInt(document.getElementById("minutesInput").value, 10) || 0;
  const secs = parseInt(document.getElementById("secondsInput").value, 10) || 0;
  var start_btn = document.getElementById("start_btn");
  start_btn.disabled = true;
  hours = hrs;
  minutes = mins;
  seconds = secs;

  update();
  timerInterval = setInterval(update, 1000);
}

function stopt() {
  start_btn.disabled = false;
  clearInterval(timerInterval);
}

function reset() {
  stopt();
  start_btn.disabled = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("hoursInput").value = "";
  document.getElementById("minutesInput").value = "";
  document.getElementById("secondsInput").value = "";
  document.getElementById("i1").innerHTML = "00:00:00";
}

function update() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        reset();
        Beep();
        return;
      }
    }
  }
  updateTimer();
}

function updateTimer() {
  document.getElementById("i1").innerHTML =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
function Beep() {
  const beep = document.getElementById("beep");
  beep.play();
}
