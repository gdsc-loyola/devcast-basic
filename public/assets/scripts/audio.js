var episode1 = document.getElementById("episode1");
var episode2 = document.getElementById("episode2");
var playBtn = document.getElementById('player-btnsymb');
var pauseBtn = document.getElementById('paused');
var durationText = document.getElementById('duration');

function playEpisode(){
    if (document.getElementById('modal-episode-title').innerHTML == 'S01E01') {
        episode1.play();
    } else if (document.getElementById('modal-episode-title').innerHTML == 'S01E02') {
        episode2.play();
    }

    if (playBtn.style.display != 'none') {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    }
    else {
        pauseEpisode();
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    }
}

function pauseEpisode(){
    if (!episode1.paused) {
        episode1.pause();
    } else if (!episode2.paused) {
        episode2.pause();
    }
}

function stopEpisode(){
    if (!episode1.paused) {
        episode1.pause();
        episode1.currentTime = 0;
    } else if (!episode2.paused) {
        episode2.pause();
        episode2.currentTime = 0;
    }
}

function secondsToTime(seconds) {
    var hr  = Math.floor(seconds / 3600);
    var min = Math.floor((seconds - (hr * 3600))/60);
    var sec = Math.floor(seconds - (hr * 3600) -  (min * 60));

    if (min < 10){ 
        min = "0" + min; 
    }
    
    if (sec < 10){ 
        sec  = "0" + sec;
    }

    return min + ':' + sec;
}

function displayDuration() {
    if (document.getElementById('modal-episode-title').innerHTML == 'S01E01') {
        durationText.innerHTML = secondsToTime(episode1.currentTime) + " / " + secondsToTime(episode1.duration);
    } else if (document.getElementById('modal-episode-title').innerHTML == 'S01E02') {
        durationText.innerHTML = secondsToTime(episode2.currentTime) + " / " + secondsToTime(episode2.duration);;
    }
}