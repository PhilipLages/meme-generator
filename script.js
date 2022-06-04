function createNewTag(tag, element, value) {         
  const createTag = document.createElement(tag);        
  createTag.setAttribute(element, value);    
  return createTag;
}

const memeText = document.getElementById('meme-text');
const input = document.getElementById('text-input');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

function createMemeText() {
  input.addEventListener('keyup', function() {    
    memeText.innerText = input.value;    
  })
}
createMemeText();

// Código baseado na explicação feita em : https://medium.com/@iamcodefoxx/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
memeInsert.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', function() {
    const selectedImage = reader.result;    
    memeImage.style.backgroundImage = `url(${selectedImage})`;
  });
  reader.readAsDataURL(this.files[0]);
});

const fire = document.getElementById('fire');
fire.addEventListener('click', function() {
  const memeImageContainer = document.getElementById('meme-image-container');
  memeImageContainer.style.border = '3px dashed rgb(255, 0, 0)';
});

const water = document.getElementById('water');
water.addEventListener('click', function() {
  const memeImageContainer = document.getElementById('meme-image-container');
  memeImageContainer.style.border = ' ';

  memeImageContainer.style.border = '5px double rgb(0, 0, 255)';
});

const earth = document.getElementById('earth');
earth.addEventListener('click', function() {
  const memeImageContainer = document.getElementById('meme-image-container');
  memeImageContainer.style.border = '6px groove rgb(0, 128, 0)';
});

const memes = document.getElementsByClassName('meme');

function changeMemeImage(e){
  memeInsert.src = URL.createObjectURL(e.target.files[0]);
  memeInsert.onload = function() {
    URL.revokeObjectURL(memeInsert.src);
  }
}

function addMemesEvents() {
  for (let meme of memes) {
    meme.addEventListener('click', changeMemeImage);
  }
}
addMemesEvents();