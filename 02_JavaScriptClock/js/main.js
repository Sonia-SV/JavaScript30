'use strict';

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  setSeconds(seconds);
  setMinutes(minutes);
  setHours(hours);
}

function setSeconds(seconds) {
  const setSecondsDeg = (seconds * 360) / 60 + 90;
  secondHand.style.transform = `rotate(${setSecondsDeg}deg)`;
}

function setMinutes(minutes) {
  const setMinutesDeg = (minutes * 360) / 60 + 90;
  minuteHand.style.transform = `rotate(${setMinutesDeg}deg)`;
}

function setHours(hours) {
  const setHoursDeg = (hours * 360) / 12 + 90;
  hourHand.style.transform = `rotate(${setHoursDeg}deg)`;
}

setInterval(setDate, 1000);
