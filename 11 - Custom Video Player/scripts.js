/*Get Our Elements*/
const player = document.querySelector(".player");

const video = player.querySelector(".viewer");

/* Build out functions*/
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  if (video.paused) {
    const icon = this.paused ? "►" : "❚ ❚";
    console.log(icon);
    toggle.textContent = icon;
  }
}

/* Hook up the event listeners*/
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("click", togglePlay);
