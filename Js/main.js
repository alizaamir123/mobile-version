const menue = document.querySelector('.menue-popup');
const cross = document.querySelector('#cross-button');
const hamburger = document.querySelector('#hamburger-button');
const form = document.querySelector('.form');
const errorMsg = document.querySelector('.flex');
const email = document.querySelector('#email');
function toggleMenue() {
  if (menue.classList.contains('hidden')) {
    menue.classList.remove('hidden');
    cross.classList.remove('hidden');
  } else {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
  }
}
hamburger.addEventListener('click', toggleMenue);
cross.addEventListener('click', toggleMenue);
document.querySelectorAll('.menue-items').forEach((n) => {
  n.addEventListener('click', () => {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
  });
});
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Email must be in Lowercase';
  } else {
    errorMsg.style.display = 'none';
  }
});
