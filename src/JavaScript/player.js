import ep from "../assets/videos/naruto-2.mp4";

const volumeUp = document.querySelector(".buttons__volume-up");
const volumeDown = document.querySelector(".buttons__volume-down");
const video = document.querySelector('.allVid__video');
const juice = document.querySelector('.allVid__controls__color-juice');
const btn = document.getElementById('buttons__play-pause');
const volumeSlider = document.querySelector('.buttons__volume');
const orangeBar = document.querySelector('.allVid__controls__color-bar');
const move = document.querySelector(".buttons__move");
const back = document.querySelector(".buttons__back");
const nextEp = document.querySelector(".buttons_nextEp");
const source = document.querySelector(".allVid__source");



// play pause 
function togglePlayPause() {

    if(video.paused){
        btn.className="pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }

}

btn.onclick = function(){
    togglePlayPause();
}

video.onclick = function() {
  togglePlayPause();
} 



// color bar

video.addEventListener('timeupdate', function(){

    let juicePos = video.currentTime / video.duration;

    juice.style.width = juicePos * 100 + '%';

    if(video.ended) {
        btn.className ="play";
    }


})




// Volume

/* volumeDown.addEventListener("click", () => {
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
}); */



volumeSlider.addEventListener('change', function(){


  video.volume = volumeSlider.value / 100;

})


// +/- 10sec

move.addEventListener("click", () => {
  video.currentTime += 10;
});


move.addEventListener("click", () => {
  video.currentTime += 10;
});

back.addEventListener("click", () => {
  video.currentTime -= 10;
});

//Nextep

nextEp.addEventListener("click", () => {
  source.setAttribute('src', ep);
  video.load();
})


