//Select DOM Items.
//DOM - Document Object Model
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item');
//const job = document.querySelector('.job');
const job = document.querySelectorAll('.job');

window.onscroll = function() {scrollResponse()};

// for (var i = 0; i < job.length; i++) {
//     job[i].addEventListener('click', toggleJobDisplay, false);
// }

//Initial menu state

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

//let jobVisible = false;
//job.addEventListener('click', toggleJobDisplay);

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

// function toggleJobDisplay() {
//     if (event.target.classList.contains("job") & event.target.classList.contains("showJob")) {
//         event.target.classList.remove('showJob');
//     } else if (event.target.classList.contains("job")) {
//         event.target.classList.add('showJob');
//     }
// }


function scrollResponse() {
    var header = document.getElementById('about-header');
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        //header.style.position = "fixed";
        //header.style.top = "0";
    } else {
        header.classList.remove('sticky');
        //document.getElementById('about-header').style.position = "relative";
    }
}