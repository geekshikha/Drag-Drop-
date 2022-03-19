let whiteBoxes = document.querySelectorAll('.whiteBox');
let imgBox = document.querySelector('.imgBox');

imgBox.addEventListener("dragstart", (e) => {
  //console.log("dropped");
  e.target.className += ' hold';
  setTimeout(() => {
  e.target.className = 'hide';
}, 0);
});


imgBox.addEventListener("dragend", (e) => {
    e.target.className = 'imgBox';
});



for ( let whiteBox of whiteBoxes) {

  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  whiteBox.addEventListener("dragenter", (e) => {
    e.target.className += ' dashed'; 
  });

  whiteBox.addEventListener("dragleave", (e) => {
      e.target.className = 'whiteBox'

  });

  whiteBox.addEventListener("drop", (e) => {
    e.target.append(imgBox);
  });


}




