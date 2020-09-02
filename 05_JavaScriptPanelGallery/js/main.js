'use strict';
const panels = document.querySelectorAll('.panel');

function handleOpen() {
  this.classList.toggle('open');
}

function handleTransEnd(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => {
  panel.addEventListener('click', handleOpen);
});
panels.forEach((panel) => {
  panel.addEventListener('transitionend', handleTransEnd);
});
