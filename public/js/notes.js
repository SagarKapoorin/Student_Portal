const text = document.getElementsByClassName('content');
const errmsg=document.getElementsByClassName('error');
// need to fix it ,using class to add bold will not cause bold to be applicable to text in database 
function bold() {
  const textContent = text[0].innerHTML;
  const isBoldPresent = textContent.includes('<b>');
  if(!isBoldPresent){
    const newtext=`<b> ${textContent} </b>`
    text[0].innerHTML=newtext;
    // console.log(text[0].innerHTML);
  }else{
    const newtext = textContent.replace(/<\/?b>/g, '');
        text[0].innerHTML = newtext;
        // console.log(text[0].innerHTML)
  }
};

function italic(){
  const textContent = text[0].innerHTML;
  const isBoldPresent = textContent.includes('<i>');
  if(!isBoldPresent){
    const newtext=`<i> ${textContent} </i>`
    text[0].innerHTML=newtext;
    // console.log(text[0].innerHTML);
  }else{
    const newtext = textContent.replace(/<\/?i>/g, '');
        text[0].innerHTML = newtext;
        // console.log(text[0].innerHTML);
  }
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
// submit button passing to backend mongodb
const content=document.getElementsByClassName("content");
const Subject=document.getElementsByClassName("Subject");
const Save=document.getElementsByClassName("Save");
const saveNotes=()=>{
      // Make a POST request with the JSON object in the body
      // making saved 
      Save[0].innerHTML=`<i class="ri-check-double-line"></i> &nbsp;</i>Saved`
    const SavedNotes_data={
      Subject:Subject[0].innerHTML,
      content:content[0].innerHTML,
    }
          fetch('/save-Notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(SavedNotes_data),
            // when sending the data to ensure it is properly formatted as JSON
        })
        setTimeout(()=>{
          Save[0].innerHTML=`<i class="ri-save-line"> &nbsp;</i>Save`;
        },2000)
}