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
