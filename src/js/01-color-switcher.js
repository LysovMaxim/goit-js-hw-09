const bodyEl = document.querySelector('body');
const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
console.log(stopEl)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startEl.addEventListener('click', addStylesBody);
let timerId = null;

function addStylesBody() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (timerId) {
     startEl.disabled = true;
    // startEl.removeEventListener('click', addStylesBody);
  }
}

stopEl.addEventListener('click', () => {
  clearInterval(timerId);
  // startEl.addEventListener('click', addStylesBody);
   startEl.disabled = false;
});
