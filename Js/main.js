const menue = document.querySelector('.menue-popup');
const cross = document.querySelector('#cross-button');

function toggleMenue() {
  if (menue.classList.contains('hidden')) {
    menue.classList.remove('hidden');
    cross.classList.remove('hidden');
  } else {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
  }
}

document.querySelectorAll('.menue-items').forEach((n) =>
  n.addEventListener('click', () => {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
  })
);
