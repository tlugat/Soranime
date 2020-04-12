const audio = document.querySelector("audio");
const video = document.querySelector("video");
const play = document.querySelector(".play");
const volumeUp = document.querySelector(".volume-up");
const volumeDown = document.querySelector(".volume-down");
const move = document.querySelector(".move");
const back = document.querySelector(".back");

play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

volumeDown.addEventListener("click", () => {
  if (video.volume - 0.1 <= 0) {
    video.volume = 0;
  } else {
    video.volume -= 0.1;
  }
  console.log(video.volume);
});

volumeUp.addEventListener("click", () => {
  if (video.volume + 0.1 >= 1) {
    video.volume = 1;
  } else {
    video.volume += 0.1;
  }
  console.log(video.volume);
});

move.addEventListener("click", () => {
  video.currentTime += 10;
});

back.addEventListener("click", () => {
  video.currentTime -= 10;
});
