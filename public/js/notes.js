const text = document.getElementsByClassName('content');
const errmsg=document.getElementsByClassName('error');
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
  if (text.offsetHeight > 139) {
    // Check if the last key pressed was a backspace (key code 8)
    if (event.keyCode != 8) {
      // Disable further typing
      //by not allowing there default behaavious..
      // adding errmsg with timeout of 5 seconds
      errmsg[0].style.display="block";
      setTimeout(() => {
        errmsg[0].style.display="none";
      }, 5000);
     
      event.preventDefault();
      // console.log('Editing disabled. Height exceeds 140 pixels.');
    }else{
      errmsg[0].style.display="none";
    }
  } else {
    // Enable editing when the height is below the limit
    text.contentEditable = true;
    errmsg[0].style.display="none";
  }
}

function countword_subject(text, event){
  if (text.offsetHeight > 39) {
    // Check if the last key pressed was a backspace (key code 8)
    if (event.keyCode != 8) {
      // Disable further typing
      //by not allowing there default behaavious..
       errmsg[0].style.display="block";
      setTimeout(() => {
        errmsg[0].style.display="none";
      }, 5000);
     
      event.preventDefault();
      // console.log('Editing disabled. Height exceeds 140 pixels.');
    }else{
      errmsg[0].style.display="none";
    }
  } else {
    // Enable editing when the height is below the limit
    text.contentEditable = true;
    errmsg[0].style.display="none";
    // console.log(text.offsetHeight);
  }
}
