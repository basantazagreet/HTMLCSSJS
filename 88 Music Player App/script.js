const el_play = document.querySelector(".play"),
  el_previous = document.querySelector(".prev"),
  el_next = document.querySelector(".next"),
  //
  el_trackImage = document.querySelector(".track-image"),
  el_title = document.querySelector(".title"),
  el_artist = document.querySelector(".artist"),
  //
  el_trackCurrentTime = document.querySelector(".current-time"),
  el_trackDuration = document.querySelector(".duration-time"),
  el_slider = document.querySelector(".duration-slider"),
  //
  el_showVolume = document.querySelector("#show-volume"),
  el_volumeIcon = document.querySelector("#volume-icon"),
  el_currentVolume = document.querySelector("#volume"),
  //
  el_autoPlayBtn = document.querySelector(".play-all"),
  //
  el_hamBurger = document.querySelector(".fa-bars"),
  el_closeIcon = document.querySelector(".fa-times"),
  //
  el_musicPlaylist = document.querySelector(".music-playlist"),
  el_pDiv = document.querySelector(".playlist-div"),
  el_playList = document.querySelector(".playlist");

let timer;
let autoplay = 0;
let indexTrack = 0;
let songIsPlaying = false;
let track = document.createElement("audio");

//   All Event Listeners
el_play.addEventListener("click", justPlay);
el_next.addEventListener("click", nextSong);
el_previous.addEventListener("click", prevSong);
el_autoPlayBtn.addEventListener("click", autoPlayToggle);
el_volumeIcon.addEventListener("click", muteSound);
el_currentVolume.addEventListener("change", changeVolume);
el_slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);
el_hamBurger.addEventListener("click", showPlayList);
el_closeIcon.addEventListener("click", hidePlayList);

// Load Tracks
function loadTrack(indexTrack) {
  clearInterval(timer);
  resetSlider();

  track.src = trackList[indexTrack].path;
  el_trackImage.src = trackList[indexTrack].img;
  el_title.innerHTML = trackList[indexTrack].name;
  el_artist.innerHTML = trackList[indexTrack].singer;
  track.load();

  timer = setInterval(updateSlider, 1000);
}
loadTrack(indexTrack);

// Play song or Pause song
function justPlay() {
  if (songIsPlaying == false) {
    playSong();
  } else {
    pauseSong();
  }
}

// Play Song
function playSong() {
  track.play();
  songIsPlaying = true;
  el_play.innerHTML = '<i class="fas fa-pause"></i>';
}

// Pause Song
function pauseSong() {
  track.pause();
  songIsPlaying = false;
  el_play.innerHTML = '<i class="fas fa-play"></i>';
}

// Next song
function nextSong() {
  if (indexTrack < trackList.length - 1) {
    indexTrack++;
    loadTrack(indexTrack);
    playSong();
  } else {
    indexTrack = 0;
    loadTrack(indexTrack);
    playSong();
  }
}

// prev song
function prevSong() {
  if (indexTrack > 0) {
    indexTrack--;
    loadTrack(indexTrack);
    playSong();
  } else {
    indexTrack = trackList.length - 1;
    loadTrack(indexTrack);
    playSong();
  }
}

// Mute Sound
function muteSound() {
  track.volume = 0;
  el_showVolume.innerHTML = 0;
  el_currentVolume.value = 0;
}

// Change Volume
function changeVolume() {
  el_showVolume.value = el_currentVolume.value;
  track.volume = el_currentVolume.value / 100;
}

// Change Duration
function changeDuration() {
  let sliderPosition = track.duration * (el_slider.value / 100);
  track.currentTime = sliderPosition;
}

// Auto Play
function autoPlayToggle() {
  if (autoplay == 0) {
    autoplay = 1;
    el_autoPlayBtn.style.background = "#db6400";
  } else {
    autoplay = 0;
    el_autoPlayBtn.style.background = "#ccc";
  }
}

// Reset Slider
function resetSlider() {
  el_slider.value = 0;
}

// Update Slider
function updateSlider() {
  let position = 0;

  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    el_slider.value = position;
  }

  if (track.ended) {
    el_play.innerHTML = '<i class="fas fa-play"></i>';
    if (autoplay == 1 && indexTrack < trackList.length - 1) {
      indexTrack++;
      loadTrack(indexTrack);
      playSong();
    } else if (autoplay == 1 && indexTrack == trackList.length - 1) {
      indexTrack = 0;
      loadTrack(indexTrack);
      playSong();
    }
  }
}

// Update Current song time
function songTimeUpdate() {
  if (track.duration) {
    let curmins = Math.floor(track.currentTime / 60);
    let cursecs = Math.floor(track.currentTime - curmins * 60);
    let durmins = Math.floor(track.duration / 60);
    let dursecs = Math.floor(track.duration - durmins * 60);

    if (dursecs < 10) {
      dursecs = "0" + dursecs;
    }
    if (durmins < 10) {
      durmins = "0" + durmins;
    }
    if (curmins < 10) {
      curmins = "0" + curmins;
    }
    if (cursecs < 10) {
      cursecs = "0" + cursecs;
    }
    el_trackCurrentTime.innerHTML = curmins + ":" + cursecs;
    el_trackDuration.innerHTML = durmins + ":" + dursecs;
  } else {
    el_trackCurrentTime.innerHTML = "00" + ":" + "00";
    el_trackDuration.innerHTML = "00" + ":" + "00";
  }
}

// Show PlayList
function showPlayList() {
  el_musicPlaylist.style.transform = "translateX(0)";
}
// Hide PlayList
function hidePlayList() {
  el_musicPlaylist.style.transform = "translateX(-100%)";
}

// Display Tracks in playlist
let counter = 1;
function displayTracks() {
  for (let i = 0; i < trackList.length; i++) {
    console.log(trackList[i].name);
    let div = document.createElement("div");
    div.classList.add("playlist");
    div.innerHTML = `
        <span class="song-index">${counter++}</span>
        <p class="single-song">${trackList[i].name}</p>
    `;
    el_pDiv.appendChild(div);
  }
  playFromPlaylist();
}

displayTracks();

// Play song from the playlist
function playFromPlaylist() {
  el_pDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("single-song")) {
      //   alert(e.target.innerHTML);
      const indexNum = trackList.findIndex((item, index) => {
        if (item.name === e.target.innerHTML) {
          return true;
        }
      });
      loadTrack(indexNum);
      playSong();
      hidePlayList();
    }
  });
}
