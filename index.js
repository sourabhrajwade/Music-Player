const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const plusBtn = document.getElementById('plus');

const form = document.getElementById('form');
//   const formData = document.querySelector('.form-container');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['ANewBeginning', 'bensound-sweet', 'breeze', 'Frency', 'jazzcomedy','sunny', 'thejazzpiano'];
const source = [`songs/ANewBeginning.mp3`, `songs/bensound-sweet.mp3`, `songs/breeze.mp3`, `songs/Frency.mp3`, `songs/jazzcomedy.mp3`, `songs/sunny.mp3`, `songs/thejazzpiano.mp3`];
const covers = [`images/ANewBeginning.jpg`, `images/bensound-sweet.jpg`, `images/breeze.jpg`, `images/Frency.jpg`, `images/jazzcomedy.jpg`, `images/sunny.jpg`, `images/thejazzpiano.jpg`];
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerHTML = song;
    audio.src = source[songIndex];
    cover.src = covers[songIndex];
}
// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();
  }
  
  // Pause song
  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
  }
  
  // Previous song
  function prevSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
  
  // Next song
  function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
  
  // Update progress bar
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
  
  // Set progress bar
  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }
  // form 
  function displayForm() {
    form.classList.remove('disp');
  }
  // Submit form
  function myFunction() {

    const formData = document.getElementById("myForm");
    const name = formData[0].value;
    const singer = formData[1].value;
    const song = formData[2].value;
    const cover = formData[3].value;
    song.push(songs);
    cover.push(covers);
    console.log(name,singer,song,cover);
    formData.reset();


  }

  // Event listeners
  playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  
  
  // Change song
  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);
  
  // Time/song update
  audio.addEventListener('timeupdate', updateProgress);
  
  // Click on progress bar
  progressContainer.addEventListener('click', setProgress);
  
  // Song ends
  audio.addEventListener('ended', nextSong);

  // form displat
  plusBtn.addEventListener('click', displayForm);

  

