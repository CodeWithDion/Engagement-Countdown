const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");


const newYearTime = new Date("Jan 25, 2025 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
    let now = new Date().getTime();
    let gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    if (h < 10) {
        hourEl.innerText = `0${h}`;
    }

    if (m < 10) {
        minuteEl.innerText = `0${m}`;
    }

    if (s < 10) {
        secondEl.innerText = `0${s}`;
    }

    setTimeout(updateCountdown, 1000)
}

