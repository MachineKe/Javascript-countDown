let daysDiv = document.getElementById("days");
let hoursDiv = document.getElementById("hours");
let minsDiv = document.getElementById("mins");
let secsDiv = document.getElementById("secs");


const christmass = "25 Dec 2023";
function countDown() {
  const christmassDate = new Date(christmass);
  const currentDate = new Date();
  const totalSeconds = (christmassDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysDiv.textContent = days;
  hoursDiv.textContent = formatTime(hours);
  minsDiv.textContent = formatTime(minutes);
  secsDiv.textContent = formatTime(seconds);
  setTimeout(countDown, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countDown(); 
