let isRunning = false;
let counter = 0;
let Id;
let startandstopbtn = document.getElementById("start_stop_btn");

function updateCounter() {
  document.getElementById("counter").innerText = counter;
}

document
  .getElementById("start_stop_btn")
  .addEventListener("click", start_stop_func);
function start_stop_func() {
  if (!isRunning) {
    Id = setInterval(() => {
      counter++;
      updateCounter();
    }, 1000);
    startandstopbtn.innerText = "Stop";
    startandstopbtn.style.background = "red";
    isRunning = true;
  } else {
    clearInterval(Id);
    startandstopbtn.innerText = "Start";
    startandstopbtn.style.background = "#31ccf3";
    isRunning = false;
  }
}

document.getElementById("inc_btn").addEventListener("click", inc);
function inc() {
  clearInterval(Id);
  counter++;
  updateCounter();
  isRunning = false;
}

document.getElementById("dec_btn").addEventListener("click", dec);
function dec() {
  clearInterval(Id);
  counter--;
  updateCounter();
  isRunning = false;
}
