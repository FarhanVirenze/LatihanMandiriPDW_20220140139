document.addEventListener("DOMContentLoaded", function() {
    // Play/Pause Audio
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "Pause Audio";
        } else {
            audio.pause();
            playPauseBtn.textContent = "Play Audio";
        }
    });

    // Play/Pause Video
    const video = document.getElementById("video");
    const playPauseVideoBtn = document.getElementById("playPauseVideoBtn");

    playPauseVideoBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseVideoBtn.textContent = "Pause Video";
        } else {
            video.pause();
            playPauseVideoBtn.textContent = "Play Video";
        }
    });

    // Display current time
    function updateTime() {
        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        document.getElementById("current-time").textContent = `Current Time: ${currentTime}`;
    }
    
    setInterval(updateTime, 1000);
    updateTime();
});
