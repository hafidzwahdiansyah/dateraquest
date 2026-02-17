/* NAVBAR SCROLL */
window.addEventListener("scroll", function(){
document.getElementById("navbar")
.classList.toggle("scrolled", window.scrollY > 50);
});

/* COUNTDOWN */
let countDownDate = new Date("March 30, 2026 00:00:00").getTime();
setInterval(function(){
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000*60*60*24));
document.getElementById("countdown").innerHTML =
"Grand Final in " + days + " Days";
},1000);

/* PARTICLE BACKGROUND */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<100;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speedX:Math.random()*1-0.5,
speedY:Math.random()*1-0.5
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
p.x += p.speedX;
p.y += p.speedY;
ctx.fillStyle="#00f0ff";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();
});
requestAnimationFrame(animate);
}

animate();

/* FORM MESSAGE */
document.querySelector(".register-form")
.addEventListener("submit",function(e){
e.preventDefault();
document.getElementById("formMessage").innerText =
"Pendaftaran berhasil! 🚀";
});

const menuToggle = document.querySelector('.menu-toggle');
const navUL = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUL.classList.toggle('active');
});
