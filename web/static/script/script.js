let burgerbalk = document.getElementById("nav_balk");
let uitklap = document.getElementById("uitklap");

let openmenu = document.getElementById("menu_open");
let closemenu = document.getElementById("menu_close");

openmenu.addEventListener('click', openingmenu);
closemenu.addEventListener('click', closingmenu)

function openingmenu() {
    burgerbalk.style.display="none";
    uitklap.style.display="flex";
}

function closingmenu() {
    burgerbalk.style.display="flex";
    uitklap.style.display="none";
}