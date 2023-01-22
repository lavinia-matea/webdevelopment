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
    strings: [ "Lavinia" ,"Coding", "Sleeping", "Eating"],
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
function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);





// Dark Mode

let darkmode= document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
    else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
}
}


