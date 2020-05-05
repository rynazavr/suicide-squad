
let el = document.getElementById('btn');

el.addEventListener('click', e => {
    e.preventDefault();

    let menu = document.getElementById('menu');
    menu.classList.toggle('opened');
});

