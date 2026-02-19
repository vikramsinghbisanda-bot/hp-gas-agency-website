// Update footer year automatically
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Mobile menu toggle behavior
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Close menu when a nav link is clicked (better mobile experience)
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});
