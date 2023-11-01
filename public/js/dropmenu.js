function Dropdown() {
    const drop_menu = document.querySelector('#add-button .drop-down');
    drop_menu.style.display = (drop_menu.style.display === 'block') ? 'none' : 'block';
}

// when click call Dropdown
const Button = document.querySelector('#add-button');
Button.addEventListener('click', Dropdown);