// Creates and adds a new calculator window to the main container
var addCalculator = () => {
    //getting containeer(main-body)->passing htmlStr in it 
    const container = document.getElementById('main-container');
    const htmlStr = `
        <div class="container">
            <button onclick="closeWindow(this)">×</button>
            <iframe src="/calculator" class="calculator"></iframe>
        </div>
    `;
    container.innerHTML += htmlStr;
};
//removing parentelement of element
var closeWindow = (element) => {
    element.parentNode.remove();
};