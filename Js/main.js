const menue = document.querySelector('.menue-popup');

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
