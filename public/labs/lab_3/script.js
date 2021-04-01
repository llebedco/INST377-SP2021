/* Put your javascript in here */

function clickToMove() {
  document.addEventListener('click', (event) => {
    const arr = document.list;
    const classes = arr.classList;
    const newClass = (classes.value === 'arrow') ? 'left' : 'arrow';
    box.classList = newClass;
  });
}
window.onclick = clickToMove;

function arrayMethod() {
  const images = document.querySelectorAll('.arrow');
  const imageArray = Array.from(images);
  imageArray.forEach((images) => {
});
}
arrayMethod();