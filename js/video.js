var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
	var playButton = document.querySelectorAll("button")[0];
	var pauseButton = document.querySelectorAll("button")[1];
	console.log(playButton);
	console.log(pauseButton);
	playButton.innerHTML = '<img src="images/playbutton.png">Play Video';
	pauseButton.innerHTML = '<img src="images/pausebutton.png">Pause Video';
}

function playVid() { 
	video.play();
	// document.getElementById("volume").innerHTML = "100";
	let vol = document.querySelector("#volume");
	// vol.innerHTML = "100%";
	vol.innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
	// console.log(video);
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	// let speed = document.getElementById("myvideo");
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	// let speed = document.getElementById("myvideo");
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime < video.duration - 60) {
		video.currentTime += 60;
	} else {
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	let mute = document.querySelector("#mute")
  	if (video.muted) {
		video.muted = false;
		mute.innerHTML = "Mute";
  		console.log("Unmuted");
	  }else{
		video.muted = true;
		mute.innerHTML = "Unmute";
		console.log("Muted");
	  }
}

function changeVolume() {
	let vol = document.querySelector("input").value;
	document.querySelector('#volume').innerHTML = vol + '%';
	console.log("Volume is " + vol + '%');
}

function gray() { 
	// classlist.add
	// classlist.toggle
	video.classList.add("grayscale");
	// video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale");
	// video.style.filter = "none";
	console.log("In color") 
}
