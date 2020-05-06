let el = document.getElementById("btn");
let closeButton = document.getElementById("close");
let menu = document.getElementById("menu");
el.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.add("opened");

});
closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.remove("opened");

});