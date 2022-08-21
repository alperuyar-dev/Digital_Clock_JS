const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
async function getTime() {
  const now = new Date();
  const setHour = now.getHours();
  const setMinute = now.getMinutes();
  const setSecond = now.getSeconds();

  setHour < 10 ? (hour.innerText = "0" + setHour) : (hour.innerHTML = setHour);
  setMinute < 10
    ? (minute.innerText = "0" + setMinute)
    : (minute.innerHTML = setMinute);
  setSecond < 10
    ? (second.innerText = "0" + setSecond)
    : (second.innerHTML = setSecond);
}
setInterval(() => getTime(), 100);
