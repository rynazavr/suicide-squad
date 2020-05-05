'use strict';

var burgerbtn = document.querySelector('.header__burder'),
    closebtn = document.querySelector('.'),
    burgertoggle = document.querySelector('.bd-modal-burger'),
    headermenu = document.querySelector('.header__top'),
    btnlink = document.querySelector('.header__btn--tell'),
    nav = document.querySelector('.header__nav'),
    display = document.querySelector('.display'),
    header__link = document.querySelector('.header__link'),


    burgerbtn.onclick = function () {
        burgertoggle.style.display = 'block';
        headermenu.style.visibility = 'hidden';
    };

closebtn.onclick = function () {
    burgertoggle.style.display = 'none';
    headermenu.style.visibility = 'visible';
};

btnlink.onclick = function () {
    nav.style.display = 'none';
    btnlink.style.display = 'none';
    display.style.display = 'block';
};

header__link.onclick = function () {
    burgertoggle.style.display = 'block';
    headermenu.style.visibility = 'hidden';
    nav.style.display = 'none';
    display.style.display = 'block';
    btnlink.style.display = 'none';
};
