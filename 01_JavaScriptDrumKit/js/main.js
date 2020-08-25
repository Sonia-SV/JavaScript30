'use strict';

const keys = document.querySelectorAll('.key');

function playSelectedAudio(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (audio !== null) {
    audio.currentTime = 0;
    audio.play();
  }
}
function addTransition(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (key !== null) {
    key.classList.add('playing');
  }
}

function removeTransition(event) {
  if (event.propertyName === 'transform') {
    event.target.classList.remove('playing');
  }
}

function listenKey(event) {
  addTransition(event);
  playSelectedAudio(event);
}

window.addEventListener('keydown', listenKey);
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
