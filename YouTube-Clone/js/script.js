const menu_icon = document.querySelector('.menu-icon');
const nav_bar = document.querySelector('.nav-bar');
const container = document.querySelector('.container');
const side_bar = document.querySelector('.side-bar');
menu_icon.onclick = function(){
    nav_bar.classList.toggle("large-nav-bar");
    container.classList.toggle("large-container");
    side_bar.classList.toggle("small-sidebar");
}
