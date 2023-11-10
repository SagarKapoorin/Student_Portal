// // Creates and adds a new calculator window to the main container
// var addCalculator = () => {
//     //getting containeer(main-body)->passing htmlStr in it 
//     const container = document.getElementById('main-container');
//     const htmlStr = `
//         <div class="container">
//         <button onclick="closeWindow(this)" class="X">×</button>
//         <div class="drag-bar" onmousedown="dragStart(this)">
//              <p>Calculator</p>
//         </div>
//             <iframe src="/calculator" class="calculator"></iframe>
//         </div>
//     `;
//     container.innerHTML += htmlStr;
// };
// //removing parentelement of element
// var closeWindow = (element) => {
//     element.parentNode.remove();
// };
// Better version-----+no problem of reseting data----->>>>>>>>>>>
// Creates and adds a new calculator window to the main container
var addCalculator = () => {
    //getting container(main-body)->passing htmlStr in it 
    const container = document.getElementById('main-container');
    const divElement = document.createElement('div');  // Create a new div element
    divElement.classList.add('container');  // Add 'container' class to the div
    divElement.innerHTML = `
        <button onclick="closeWindow(this)" class="X">×</button>
        <div class="drag-bar" onmousedown="dragStart(this)">
             <p>Calculator</p>
        </div>
        <iframe src="/calculator" class="calculator"></iframe>
    `;

    container.appendChild(divElement);  // Append the new div to the container
};

//removing parent element of element
var closeWindow = (element) => {
    element.parentNode.remove();
};
