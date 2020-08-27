'use strict';
const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const color = document.querySelector('#color');
const inputs = document.querySelectorAll('input');

function renderInputValues(event) {
  const sizing = event.target.dataset.sizing;
  const units = sizing ? sizing : '';
  document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + units);
}

inputs.forEach((input) => input.addEventListener('input', renderInputValues));
