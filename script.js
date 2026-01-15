// ===============================
// CUENTA REGRESIVA AL MUNDIAL 2026
// ===============================

// Fecha de inicio del Mundial
const worldCupStart = new Date(2026, 5, 11, 0, 0, 0); 
// Nota: el mes es 0-indexed → 5 = junio

const elDays  = document.getElementById("cd-days");
const elHours = document.getElementById("cd-hours");
const elMins  = document.getElementById("cd-mins");
const elSecs  = document.getElementById("cd-secs");

function pad(n) {
  return n.toString().padStart(2, "0");
}

function updateCountdown() {
  const now = new Date(); //  SIEMPRE desde HOY / AHORA
  let diff = worldCupStart - now;

  if (diff <= 0) {
    elDays.textContent  = "0";
    elHours.textContent = "00";
    elMins.textContent  = "00";
    elSecs.textContent  = "00";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);

  const days  = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const mins  = Math.floor((totalSeconds % (60 * 60)) / 60);
  const secs  = totalSeconds % 60;

  elDays.textContent  = days;
  elHours.textContent = pad(hours);
  elMins.textContent  = pad(mins);
  elSecs.textContent  = pad(secs);
}

// Primera ejecución inmediata
updateCountdown();

// Actualiza cada segundo
setInterval(updateCountdown, 1000);
