function createNewTag(tag, element, value) {         
  const createTag = document.createElement(tag);        
  createTag.setAttribute(element, value);    
  return createTag;
}

const memeText = document.getElementById('meme-text');
const input = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');

function createMemeText() {
  input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
      memeText.innerText = input.value;
    }
  })
}
createMemeText();

// Código baseado na explicação feita em : https://medium.com/@iamcodefoxx/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
memeInsert.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', function() {
    const selectedImage = reader.result;
    const memeImage = document.querySelector('#meme-image');
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