const episode1 = document.getElementById("episode1");
const episode2 = document.getElementById("episode2");
// const episode3 = document.getElementById("episode3");
const episode4 = document.getElementById("episode4");
const playBtn = document.getElementById('player-btnsymb');
const pauseBtn = document.getElementById('paused');
let durationText = document.getElementById('duration');

if (!episode1.paused || !episode2.paused || !episode3.paused || !episode4.paused) {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function playEpisode(){
    if (document.getElementById('modalplayernum').innerHTML == 'S01E01') {
        episode1.play();
    } else if (document.getElementById('modalplayernum').innerHTML == 'S01E02') {
        episode2.play();
    } 
    // else if (document.getElementById('modalplayernum').innerHTML == 'S01E03') {
    //     episode3.play();
    // } 
    else if (document.getElementById('modalplayernum').innerHTML == 'S01E04') {
        episode4.play();
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
    // else if (!episode3.paused) {
    //     episode3.pause();
    // } 
    else if (!episode4.paused) {
        episode4.pause();
    }
}

function stopEpisode(){
    if (episode1.currentTime > 0) {
        episode1.pause();
        episode1.currentTime = 0;
    } else if (episode2.currentTime > 0) {
        episode2.pause();
        episode2.currentTime = 0;
    } 
    // else if (episode3.currentTime > 0) {
    //     episode3.pause();
    //     episode3.currentTime = 0;
    // } 
    else if (episode4.currentTime > 0) {
        episode4.pause();
        episode4.currentTime = 0;
    }

    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
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
    if (document.getElementById('modalplayernum').innerHTML == 'S01E01') {
        durationText.innerHTML = secondsToTime(episode1.currentTime) + " / " + secondsToTime(episode1.duration);
    } else if (document.getElementById('modalplayernum').innerHTML == 'S01E02') {
        durationText.innerHTML = secondsToTime(episode2.currentTime) + " / " + secondsToTime(episode2.duration);
    }  
    // else if (document.getElementById('modalplayernum').innerHTML == 'S01E03') {
    //     durationText.innerHTML = secondsToTime(episode3.currentTime) + " / " + secondsToTime(episode3.duration);
    // }  
    else if (document.getElementById('modalplayernum').innerHTML == 'S01E04') {
        durationText.innerHTML = secondsToTime(episode4.currentTime) + " / " + secondsToTime(episode4.duration);
    }
}