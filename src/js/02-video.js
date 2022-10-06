import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Vimeo.Player(iframe);
console.log(player);

myTime = {};

player.on('timeupdate', function (event) {
    console.log("for", myTime);
        const { seconds, percent, duration } = event;
    myTime = { seconds, percent, duration }
    console.log(myTime);
    return myTime
})


// console.log("its",  myTime);

// player.on('timeupdate', function (event) {
        
    
//     myTime['videoplayer- current - time'] = event.seconds;
//     console.log(myTime);
//     return myTime
// });



// player.setCurrentTime(myTime).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });
//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
