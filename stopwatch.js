var windowWidth = window.innerWidth;
function adjustLayout() {
  if (windowWidth <= 600) {
    document.getElementById("i1").innerHTML = "00<br>00<br>00<br>00";
  }
}
window.onload = adjustLayout;
window.onresize = adjustLayout;

var timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function starts() {
  var start_btn = document.getElementById("start_btn");
  start_btn.disabled = true;
  timer = setInterval(updates, 1);
}

function stops() {
  start_btn.disabled = false;
  clearInterval(timer);
}

function resets() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  milliseconds = 0;
  start_btn.disabled = false;
  if (windowWidth < 600) {
    adjustLayout();
  } else {
    document.getElementById("i1").innerHTML = "00:00:00:00";
  }
}

function updates() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  if (windowWidth <= 600) {
    document.getElementById("i1").innerHTML =
      formatTime(hours) +
      "<br>" +
      formatTime(minutes) +
      "<br>" +
      formatTime(seconds) +
      "<br>" +
      formatMilliseconds(milliseconds);
  } else {
    document.getElementById("i1").innerHTML =
      formatTime(hours) +
      ":" +
      formatTime(minutes) +
      ":" +
      formatTime(seconds) +
      ":" +
      formatMilliseconds(milliseconds);
  }
}
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
function formatMilliseconds(ms) {
  return ms < 10 ? "00" + ms : ms;
}
