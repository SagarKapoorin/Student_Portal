let draggedElement; //element that's dragged
let xOffset = 10; //the defualt offset of the elements
let yOffset = 10;

//calls function when mouse in down/pressed
function dragStart(element) {
	//gets the element
	draggedElement = element;

	//sets the element to the defualt position if there is not set position
	if (draggedElement.parentNode.style.left == "")
		draggedElement.parentNode.style.left = "5px";
	if (draggedElement.parentNode.style.top == "")
		draggedElement.parentNode.style.top = "0px";

	//get the position of the cursors
	//i found that cursor and element have slight diffrence in movement so this code fixes it
	xOffset = event.pageX - parseInt(draggedElement.parentNode.style.left);
	yOffset = event.pageY - parseInt(draggedElement.parentNode.style.top);
	//console.log( "first"+xOffset+ " "+yOffset);
	//adds eventListeners and remove them after drag is finished
	//the reason we can't just add eventListeners to the elements that going to be drags is because if the mouse moves too fast it goes out of the element and stops dragging.
	document.addEventListener("mousemove", drag);
	//when mouse pressed and draged 
	document.addEventListener("mouseup", endDrag);
	//when mouse released and draged

}

function drag(e) {
	//called ever time the mouse moves and moves the window to the mouse
	draggedElement.parentNode.style.left = (e.pageX - xOffset) + "px";
	//makes it not possible to drag under the header
	if (e.pageY > 70)
		draggedElement.parentNode.style.top = (e.pageY - yOffset) + "px";
}

//ends the drag and removes the eventListeners
function endDrag(e) {
	document.removeEventListener("mousemove", drag);//removing listener
}
