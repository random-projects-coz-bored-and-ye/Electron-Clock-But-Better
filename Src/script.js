const clock = document.getElementById('Time');

function updateTime() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);