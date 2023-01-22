// Music Player
 let playBtn = document.getElementById("playBtn");


let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ddd',
    progressColor: '#ff006c',
    barWidth: 3,
    responsive: true,
    height: 90,
    barRadius: 4

});

wavesurfer.load('music_player/StoryOfMyLife.mp3');

playBtn.onclick = function (){
    wavesurfer.playPause();
    if (playBtn.src.includes("play.png")) {
        playBtn.src = "music_player/pause.png";
    }else{
        playBtn.src = "music_player/play.png";

    }
}

wavesurfer.on('finish', function() {
    playBtn.src = "music_player/play.png";
    wavesurfer.stop();
})

// Text Typing Animation
let typed = new Typed(".auto-type", {
    strings: [ "Lavinia" ,"Researching", "Coding", "Sleeping", "Eating"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
  }); 


let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

// Contact Form






// Light/Dark Mode

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});

