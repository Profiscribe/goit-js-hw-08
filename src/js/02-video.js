
    import Player from "@vimeo/player";
    import Throttle from 'lodash.throttle';
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const timeKey = 'videoplayer-current time'

    function durationSaveToStorage({ seconds }) {
         localStorage.setItem(timeKey, seconds)
    }
    window.addEventListener('load', newStart);
    player.on('timeupdate', durationSaveToStorage);

function newStart() {
    if (!localStorage.getItem(timeKey)) {
        return;
    }
}
const currentVideoTime = localStorage.getItem(timeKey);


player
.setCurrentTime(currentVideoTime)
    .then(() => {
        // player.play();
    })
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                breack;
            default: break;
    }
    })



  
    
    

