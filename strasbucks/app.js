let menuIcon = document.getElementById("menu-icon");
menuIcon.onclick = function() {
   let navBar = document.querySelector(".navbar");
   navBar.classList.toggle("active");
}