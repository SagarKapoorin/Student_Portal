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
//removing parentelement of element
// var closeWindow = (element) => {
//     element.parentNode.remove();
// };
// Better version-----+no problem of reseting data----->>>>>>>>>>>
// Creates and adds a new calculator window to the main container
const addCalculator = () => {
    //getting container(main-body)->passing htmlStr in it 
    const container = document.getElementById('main-container');
    const divelement = document.createElement('div');  // Create a new div element
    divelement.classList.add('container');  // Add 'container' class to the div
    divelement.innerHTML = `
        <button onclick="closeWindow(this)" class="X">×</button>
        <div class="drag-bar" onmousedown="dragStart(this)">
             <p>Calculator</p>
        </div>
        <iframe src="/calculator" class="calculator"></iframe>
    `;

    container.appendChild(divelement);  // Append the new div to the container
};
//Notes
const addNotes = () => {
    //getting container(main-body)->passing htmlStr in it 
    const container = document.getElementById('main-container');
    const divelement = document.createElement('div');  // Create a new div element
    divelement.classList.add('Notes_container');  // Add 'container' class to the div
    divelement.innerHTML = `
        <button onclick="closeWindow(this)" class="X">×</button>
        <div class="drag-bar-notes" onmousedown="dragStart(this)">
             <p>Notes</p>
        </div>
        <iframe src="/Notes" class="Notes"></iframe>
    `;

    container.appendChild(divelement);  // Append the new div to the container
};
//removing parent element of element
const closeWindow = (element) => {
    element.parentNode.remove();
};
//dictinary
const adddict = () => {
    //getting container(main-body)->passing htmlStr in it 
    const container = document.getElementById('main-container');
    const divelement = document.createElement('div');  // Create a new div element
    divelement.classList.add('Notes_container');  // Add 'container' class to the div
    divelement.innerHTML = `
        <button onclick="closeWindow(this)" class="X">×</button>
        <div class="drag-bar-dict" onmousedown="dragStart(this)">
             <p>Dictionary</p>
        </div>
        <iframe src="/dict" class="Notes"></iframe>
    `;

    container.appendChild(divelement);  // Append the new div to the container
};
const addweather = () => {
    //getting container(main-body)->passing htmlStr in it 
    const container = document.getElementById('main-container');
    const divelement = document.createElement('div');  // Create a new div element
    divelement.classList.add('Weather_container');  // Add 'container' class to the div
    divelement.innerHTML = `
        <button onclick="closeWindow(this)" class="Y">×</button>
        <div class="drag-bar-weather" onmousedown="dragStart(this)">
             <p>Weather</p>
        </div>
        <iframe src="/weather" class="Weather"></iframe>
    `;

    container.appendChild(divelement);  // Append the new div to the container
};
const addTimer = () => {
    //getting container(main-body)->passing htmlStr in it 
    const container = document.getElementById('main-container');
    const divelement = document.createElement('div');  // Create a new div element
    divelement.classList.add('Clock_container');  // Add 'container' class to the div
    divelement.innerHTML = `
        <div onmousedown="dragStart(this)" class="drag-bar-clock">
        <button onclick="closeWindow2(this)" class="X">×</button>
        </div>
        <iframe src="/Clock" class="Clock"></iframe>
    `;

    container.appendChild(divelement);  // Append the new div to the container
};
const closeWindow2 = (element) => {
    //find closest div with clock container and remove
    element.closest('.Clock_container').remove();
};