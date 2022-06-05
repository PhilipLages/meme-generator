const memeText = document.getElementById('meme-text');
const input = document.getElementById('text-input');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeImageContainer = document.getElementById('meme-image-container');

function createMemeText() {
  input.addEventListener('keyup', () => {
    memeText.innerText = input.value;
  });
}
createMemeText();

memeInsert.addEventListener('change', (e) => {
  memeImage.src = URL.createObjectURL(e.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

const fire = document.getElementById('fire');
fire.addEventListener('click', () => {
  memeImageContainer.style.border = ' ';
  memeImageContainer.style.border = '3px dashed rgb(255, 0, 0)';
});

const water = document.getElementById('water');
water.addEventListener('click', () => {
  memeImageContainer.style.border = ' ';
  memeImageContainer.style.border = '5px double rgb(0, 0, 255)';
});

const earth = document.getElementById('earth');
earth.addEventListener('click', () => {
  memeImageContainer.style.border = ' ';
  memeImageContainer.style.border = '6px groove rgb(0, 128, 0)';
});

const memes = document.getElementsByClassName('meme');

function changeMemeImage(e) {
  memeImage.src = e.target.src;
}

function addMemesEvents() {
  for (let meme = 0; meme < memes.length; meme += 1) {
    const memeEvent = memes[meme];
    memeEvent.addEventListener('click', changeMemeImage);
  }
}
addMemesEvents();
