// CONTADOR
import Countdown from"./countdown";

const blackFriday = new Countdown("25 November 2021 24:00:00 GMT-0300");
const time = document.querySelectorAll("[data-time]");

function showTime() {
    time.forEach((tempo, index) => {
        tempo.innerHTML = blackFriday.total[index]
    });
}

showTime();
setInterval(showTime, 1000);
