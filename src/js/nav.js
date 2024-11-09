const toggleBtn = document.querySelector('.header__button');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.header__logo');
const overlay = document.querySelector('.overlay');
const btnText = document.querySelector('.header__button-text');

let isOpen = false;

const toggleNav = (state) => {
  document.body.classList.toggle('no-scroll', state);
  nav.classList.toggle('is-active', state);
  toggleBtn.classList.toggle('is-active', state);
  toggleBtn.setAttribute('aria-expanded', state);
  logo.classList.toggle('is-active', state);
  btnText.classList.toggle('is-active', state);
  overlay.classList.toggle('is-active', state);
  isOpen = state;
};

const closeNav = () => toggleNav(false);

toggleBtn.addEventListener('click', () => {
  toggleNav(!isOpen);
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    closeNav();
  }
});
