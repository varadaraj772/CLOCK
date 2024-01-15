function updateClock() {
  const date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var mer = hr >= 12 ? "PM" : "AM";
  if (hr == 0) {
    hr = 12;
  } else {
    hr = hr % 12;
    if (hr < 10) {
      hr = "0" + hr;
    }
  }
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("ih").innerHTML = hr + " ";
  document.getElementById("im").innerHTML = min;
  document.getElementById("ampm").innerHTML = mer;
  document.getElementById("i2").innerHTML = months[date.getMonth()];
  document.getElementById("i3").innerHTML = days[date.getDay()];
  document.getElementById("i4").innerHTML = String(date.getDate()).padStart(
    2,
    "0"
  );
  document.getElementById("i5").innerHTML = date.getFullYear();
}
let a = setInterval(updateClock, 1000);
updateClock();
