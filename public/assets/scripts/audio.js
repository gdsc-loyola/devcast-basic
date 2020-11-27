var episode1 = document.getElementById("episode1");
var episode2 = document.getElementById("episode2");

var title = document.getElementById("modal-episode-title").innerHTML;

function playEpisode(){
    if (title == "S01E01") {
        episode1.play();
    } else if (title == "S01E02") {
        episode2.play();
    }
}

function stopEpisode(){
    episode1.pause();
    episode1.currentTime = 0;
}