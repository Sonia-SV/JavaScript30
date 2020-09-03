'use strict';
const checkboxes = document.querySelectorAll('input');

let lastChecked;

const listenCheckbox = (ev) => {
  let inBetween = false;
  if (ev.shiftKey && ev.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === ev.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = ev.target;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', listenCheckbox);
});
