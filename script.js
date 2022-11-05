const menuHamburger = document.querySelector(".burger-icon")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

const elec_a_up_small = document.querySelector(".elec_a_up_small")
const elec_b_up_small = document.querySelector(".elec_b_up_small")
const elec_c_up_small = document.querySelector(".elec_c_up_small")
const elec_a_up_med = document.querySelector(".elec_a_up_med")
const elec_b_up_med = document.querySelector(".elec_b_up_med")
const elec_c_up_med = document.querySelector(".elec_c_up_med")
const elec_a_down_big = document.querySelector(".elec_a_down_big")
const elec_b_down_big = document.querySelector(".elec_b_down_big")
const elec_c_down_big = document.querySelector(".elec_c_down_big")
const elec_a = document.querySelector(".elec_a")
const elec_b = document.querySelector(".elec_b")
const elec_c = document.querySelector(".elec_c")

function supp_elec(){
	elec_a.classList.remove('small')
	elec_b.classList.remove('small')
	elec_c.classList.remove('small')
	elec_a.classList.remove('big')
	elec_b.classList.remove('big')
	elec_c.classList.remove('big')
}

elec_a_up_small.addEventListener('click',()=>{
supp_elec();
elec_a.classList.toggle('big')
elec_b.classList.toggle('small')
elec_c.classList.toggle('small')
})

elec_b_up_small.addEventListener('click',()=>{
supp_elec();
elec_a.classList.toggle('small')
elec_b.classList.toggle('big')
elec_c.classList.toggle('small')
})

elec_c_up_small.addEventListener('click',()=>{
supp_elec();
elec_a.classList.toggle('small')
elec_b.classList.toggle('small')
elec_c.classList.toggle('big')
})

elec_a_up_med.addEventListener('click',()=>{
supp_elec();
elec_a.classList.toggle('big')
elec_b.classList.toggle('small')
elec_c.classList.toggle('small')
})

elec_b_up_med.addEventListener('click',()=>{
supp_elec();
elec_a.classList.toggle('small')
elec_b.classList.toggle('big')
elec_c.classList.toggle('small')
})

elec_c_up_med.addEventListener('click',()=>{
supp_elec();
elec_a.classList.toggle('small')
elec_b.classList.toggle('small')
elec_c.classList.toggle('big')
})

elec_a_down_big.addEventListener('click',()=>{
supp_elec();
})

elec_b_down_big.addEventListener('click',()=>{
supp_elec();
})

elec_c_down_big.addEventListener('click',()=>{
supp_elec();
})