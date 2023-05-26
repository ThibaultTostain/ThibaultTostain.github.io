const menuHamburger = document.querySelector(".burger-icon")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})