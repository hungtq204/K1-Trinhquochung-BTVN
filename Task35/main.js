function clock() {
  const now = new Date();
  let hours = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? '0' + hours : hours;
  minute = minute < 10 ? '0' + minute : minute;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let stringClock = `${hours}:${minute}:${seconds}`;
  document.querySelector('#clock').innerHTML = stringClock;
}
clock();
setInterval(clock, 1000);
