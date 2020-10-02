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

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook up the event listeners*/
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
