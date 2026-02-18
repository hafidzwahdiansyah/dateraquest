const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 50) {
      el.classList.add('active');
    }
  });
});




  const menuToggle = document.getElementById('mobile-menu');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  // Optional: close menu saat klik link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('active');
    });
  });

  // Optional: nav background saat scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
