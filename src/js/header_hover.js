let el = document.getElementById("btn");
let ele = document.getElementById("btn_t");
let closeButton = document.getElementById("close");
let menu = document.getElementById("menu");
el.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.add("opened");

});
ele.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.add("opened");

});
closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.remove("opened");

});