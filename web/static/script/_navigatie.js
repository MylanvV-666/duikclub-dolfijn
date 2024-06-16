document.addEventListener("DOMContentLoaded", function() {
    let menuOpen = document.getElementById("menu_open");
    let menuClose = document.getElementById("menu_close");
    let uitklap = document.getElementById("uitklap");

    menuOpen.addEventListener("click", function() {
        uitklap.style.display = "flex";
    });

    menuClose.addEventListener("click", function() {
        uitklap.style.display = "none";
    });
});
