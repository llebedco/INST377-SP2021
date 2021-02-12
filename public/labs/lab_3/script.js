/* Put your javascript in here */
const width = 130; // image width
const count = 3; // visible images count
const list = carouselID.querySelector('ul');
const listElems = carouselID.querySelectorAll('li');
const position = 0;

carouselID.querySelector('.left').onclick = function() {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

carouselID.querySelector('.right').onclick = function() {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

function arrayMethod() {
  const images = document.querySelectorAll('.carouselID');
  const imageArray = Array.from(images);
  console.log(images); 

  imageArray.forEach((images) => {
     console.log(images);
});
}
arrayMethod();