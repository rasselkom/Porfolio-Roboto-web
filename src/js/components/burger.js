let burger = document.querySelector('[data-burger]');
let nav = document.querySelector('[data-nav]');
let body = document.body;

burger.addEventListener('click', () => {
body.classList.toggle('stop-scroll');
nav.classList.toggle('nav__visible');
});
