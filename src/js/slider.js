import CardIcon from '../assets/images/card-icon.svg';

const slides = [
  { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { id: 6, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
];

let currentSlide = 0;
const sliderLine = document.querySelector('.slider__line');

const createSlideElement = (slideData) => {
  const container = document.createElement('div');
  container.classList.add('slider__slide');
  
  const image = new Image();
  image.src = CardIcon;
  container.appendChild(image);
  
  const idSpan = document.createElement('span');
  idSpan.textContent = slideData.id;
  container.appendChild(idSpan);
  
  const textParagraph = document.createElement('p');
  textParagraph.textContent = slideData.text;
  container.appendChild(textParagraph);
  
  return container;
};

const updateSlide = () => {
  sliderLine.innerHTML = '';
  sliderLine.appendChild(createSlideElement(slides[currentSlide]));
};

const swipeToSlide = (direction) => {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  updateSlide();
};

const btnRight = document.querySelector('.slider__btn--right');
btnRight.addEventListener('click', () => swipeToSlide(1));

const btnLeft = document.querySelector('.slider__btn--left');
btnLeft.addEventListener('click', () => swipeToSlide(-1));

const showAllSlides = () => {
  sliderLine.innerHTML = '';
  slides.forEach(slide => {
    sliderLine.appendChild(createSlideElement(slide));
  });
};

const showFirstSlide = () => {
  updateSlide();
};

const adjustSlidesDisplay = () => {
  const screenIsLarge = window.matchMedia('(min-width: 1280px)').matches;
  if (screenIsLarge) {
    showAllSlides();
  } else {
    showFirstSlide();
  }
};

adjustSlidesDisplay();

window.addEventListener('resize', adjustSlidesDisplay);
