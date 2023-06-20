

const days = document.getElementById('days').innerHTML;
const hours = document.getElementById('hours').innerHTML;
const minutes = document.getElementById('minutes').innerHTML;
const seconds = document.getElementById('seconds').innerHTML;

let time = Number(days) * 24 * 60 * 60 + Number(hours)* 60 * 60 + Number(minutes) * 60 + Number(seconds);


setInterval(() => {
    let days = Math.floor(time / (24 * 60 * 60));
    // console.log(days);
    document.getElementById('days').textContent = days.toString();

    let hours = Math.floor((time - (days * 24 * 60 * 60)) / (60 * 60));
    // console.log(hours);
    document.getElementById('hours').textContent = hours.toString();

    let minutes = Math.floor((time - (days * 24 * 60 * 60) - (hours * 60 * 60)) / 60);
    // console.log(minutes);
    document.getElementById('minutes').textContent = minutes.toString();

    let seconds = Math.floor(time - (days * 24 * 60 * 60) - (hours * 60 * 60) - minutes * 60);
    // console.log(seconds);
    document.getElementById('seconds').textContent = seconds.toString();
    time--;
}, 1000)
