const menue = document.querySelector('.menue-popup');
const cross = document.querySelector('#cross-button');
const hamburger = document.querySelector('#hamburger-button');
const popshow = document.querySelector('.popup-container');
const hidePopup = document.querySelector('.cross-popup');
const toggleMenue = () => {
  if (menue.classList.contains('hidden')) {
    menue.classList.remove('hidden');
    cross.classList.remove('hidden');
  } else {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
  }
};
hamburger.addEventListener('click', toggleMenue);
cross.addEventListener('click', toggleMenue);
document.querySelectorAll('.menue-items').forEach((n) => {
  n.addEventListener('click', () => {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
  });
});







