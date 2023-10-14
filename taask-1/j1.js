let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
navbar.classList.remove('active');
}


document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("navbar a");

    const originalColors = {};

   

    sections.forEach((section) => {
        originalColors[section.id] = getComputedStyle(section).backgroundColor;
    });

    function changeBackgroundColor() {

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const newColor = "#eeb76b"; 
            if (section.id === "home") {
                return; 
            }
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                section.style.backgroundColor = newColor;
            } else {
                section.style.backgroundColor = originalColors[section.id];
            }
        });
    }


     navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({ top: targetSection.offsetTop, behavior: "smooth" });
            }
        });
    });

   
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);

});