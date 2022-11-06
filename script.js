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

const prog_a_up_small = document.querySelector(".prog_a_up_small")
const prog_b_up_small = document.querySelector(".prog_b_up_small")
const prog_c_up_small = document.querySelector(".prog_c_up_small")
const prog_a_up_med = document.querySelector(".prog_a_up_med")
const prog_b_up_med = document.querySelector(".prog_b_up_med")
const prog_c_up_med = document.querySelector(".prog_c_up_med")
const prog_a_down_big = document.querySelector(".prog_a_down_big")
const prog_b_down_big = document.querySelector(".prog_b_down_big")
const prog_c_down_big = document.querySelector(".prog_c_down_big")
const prog_a = document.querySelector(".prog_a")
const prog_b = document.querySelector(".prog_b")
const prog_c = document.querySelector(".prog_c")

function supp_prog(){
	prog_a.classList.remove('small')
	prog_b.classList.remove('small')
	prog_c.classList.remove('small')
	prog_a.classList.remove('big')
	prog_b.classList.remove('big')
	prog_c.classList.remove('big')
}

prog_a_up_small.addEventListener('click',()=>{
supp_prog();
prog_a.classList.toggle('big')
prog_b.classList.toggle('small')
prog_c.classList.toggle('small')
})

prog_b_up_small.addEventListener('click',()=>{
supp_prog();
prog_a.classList.toggle('small')
prog_b.classList.toggle('big')
prog_c.classList.toggle('small')
})

prog_c_up_small.addEventListener('click',()=>{
supp_prog();
prog_a.classList.toggle('small')
prog_b.classList.toggle('small')
prog_c.classList.toggle('big')
})

prog_a_up_med.addEventListener('click',()=>{
supp_prog();
prog_a.classList.toggle('big')
prog_b.classList.toggle('small')
prog_c.classList.toggle('small')
})

prog_b_up_med.addEventListener('click',()=>{
supp_prog();
prog_a.classList.toggle('small')
prog_b.classList.toggle('big')
prog_c.classList.toggle('small')
})

prog_c_up_med.addEventListener('click',()=>{
supp_prog();
prog_a.classList.toggle('small')
prog_b.classList.toggle('small')
prog_c.classList.toggle('big')
})

prog_a_down_big.addEventListener('click',()=>{
supp_prog();
})

prog_b_down_big.addEventListener('click',()=>{
supp_prog();
})

prog_c_down_big.addEventListener('click',()=>{
supp_prog();
})

const meca_a_up_small = document.querySelector(".meca_a_up_small")
const meca_b_up_small = document.querySelector(".meca_b_up_small")
const meca_c_up_small = document.querySelector(".meca_c_up_small")
const meca_a_up_med = document.querySelector(".meca_a_up_med")
const meca_b_up_med = document.querySelector(".meca_b_up_med")
const meca_c_up_med = document.querySelector(".meca_c_up_med")
const meca_a_down_big = document.querySelector(".meca_a_down_big")
const meca_b_down_big = document.querySelector(".meca_b_down_big")
const meca_c_down_big = document.querySelector(".meca_c_down_big")
const meca_a = document.querySelector(".meca_a")
const meca_b = document.querySelector(".meca_b")
const meca_c = document.querySelector(".meca_c")

function supp_meca(){
	meca_a.classList.remove('small')
	meca_b.classList.remove('small')
	meca_c.classList.remove('small')
	meca_a.classList.remove('big')
	meca_b.classList.remove('big')
	meca_c.classList.remove('big')
}

meca_a_up_small.addEventListener('click',()=>{
supp_meca();
meca_a.classList.toggle('big')
meca_b.classList.toggle('small')
meca_c.classList.toggle('small')
})

meca_b_up_small.addEventListener('click',()=>{
supp_meca();
meca_a.classList.toggle('small')
meca_b.classList.toggle('big')
meca_c.classList.toggle('small')
})

meca_c_up_small.addEventListener('click',()=>{
supp_meca();
meca_a.classList.toggle('small')
meca_b.classList.toggle('small')
meca_c.classList.toggle('big')
})

meca_a_up_med.addEventListener('click',()=>{
supp_meca();
meca_a.classList.toggle('big')
meca_b.classList.toggle('small')
meca_c.classList.toggle('small')
})

meca_b_up_med.addEventListener('click',()=>{
supp_meca();
meca_a.classList.toggle('small')
meca_b.classList.toggle('big')
meca_c.classList.toggle('small')
})

meca_c_up_med.addEventListener('click',()=>{
supp_meca();
meca_a.classList.toggle('small')
meca_b.classList.toggle('small')
meca_c.classList.toggle('big')
})

meca_a_down_big.addEventListener('click',()=>{
supp_meca();
})

meca_b_down_big.addEventListener('click',()=>{
supp_meca();
})

meca_c_down_big.addEventListener('click',()=>{
supp_meca();
})