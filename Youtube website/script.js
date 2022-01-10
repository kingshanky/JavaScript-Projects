var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");            /* when we click it open the side view of navigation*/
    container.classList.toggle("large-container");       /* it is used to increase the size of iconn in nav */
}

