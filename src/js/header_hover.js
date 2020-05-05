const menu = document.querySelector('.header__hover');
const btn = menu.querySelector('.header__burger');
btn.addEventListener('click', evt => {
    if (menu.className.indexOf('active') === -1) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
})