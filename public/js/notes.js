const text = document.getElementsByClassName('content');
function bold() {
  text[0].classList.remove("normal");
  text[0].classList.add("bold");
};

function italic(){
  text[0].classList.remove("normal");
  text[0].classList.add("italic");
}
function regular(){
  text[0].classList.remove("italic");
  text[0].classList.remove("bold");
  text[0].classList.add("normal");
}
function countword_description(text, event){
  limit = text.innerText;
  if (text.offsetHeight > 140) {
    // Check if the last key pressed was a backspace (key code 8)
    if (event.keyCode != 8) {
      // Disable further typing
      //by not allowing there default behaavious..
      event.preventDefault();
      // console.log('Editing disabled. Height exceeds 140 pixels.');
    }
  } else {
    // Enable editing when the height is below the limit
    text.contentEditable = true;
  }
}
function countword_subject(text, event){
  if (text.offsetHeight > 39) {
    // Check if the last key pressed was a backspace (key code 8)
    if (event.keyCode != 8) {
      // Disable further typing
      //by not allowing there default behaavious..
      event.preventDefault();
      // console.log('Editing disabled. Height exceeds 140 pixels.');
    }
  } else {
    // Enable editing when the height is below the limit
    text.contentEditable = true;
    // console.log(text.offsetHeight);
  }
}
