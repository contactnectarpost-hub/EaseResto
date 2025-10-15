// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// AOS Init
AOS.init({
  duration: 900,
  once: true
});
