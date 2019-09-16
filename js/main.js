//Select DOM Items.
//DOM - Document Object Model
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item');

//Initial menu state

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        //If menu is initially not shown, then show the buttons. 
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBrand.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBrand.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}
