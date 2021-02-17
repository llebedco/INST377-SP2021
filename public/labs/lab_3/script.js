/* Put your javascript in here */

function clickToMove() {
  document.addEventListener('click', (event) => {
    const arr = document.list;
    const classes = arr.classList;
    console.log(classes.value);
    const newClass = (classes.value === 'arrow') ? 'left' : 'arrow';
    console.log(newClass);
    box.classList = newClass;
  });
}
window.onclick = clickToMove;

function arrayMethod() {
  const images = document.querySelectorAll('.arrow');
  const imageArray = Array.from(images);
  console.log(images); 

  imageArray.forEach((images) => {
     console.log(images);
});
}
arrayMethod();


