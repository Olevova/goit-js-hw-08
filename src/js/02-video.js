// імпортуємо потрібні модулі для роботи
import Player from '@vimeo/player';
const loadash = require("lodash");

// виділяємо плеєр та вішаємо на нього подію, за допомогою тротель робимо відслідковування події раз в секунду
const iframe = document.querySelector('iframe');
// console.log(iframe);

const player = new Vimeo.Player(iframe);
// console.log(player);

player.on('timeupdate', loadash.throttle(function (event) {
    const { seconds, percent, duration } = event;
    const stopTime= { seconds, percent, duration };
    console.log(stopTime);
    return localStorage.setItem ("videoplayer-current-time", JSON.stringify(stopTime))
}, 1000))

// Запускаємо відео зсилаючись на час, з локалсторідж

const timeBegin = JSON.parse(localStorage.getItem("videoplayer-current-time"));

// console.log(timeBegin.seconds);
if (timeBegin) {
    player.setCurrentTime(timeBegin.seconds).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
}
