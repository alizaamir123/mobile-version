const hamburger = document.querySelector('#hamburger-button');
const menue = document.querySelector('.menue-popup');
const cross = document.querySelector('#cross-button');

const toggleMenue = () => {
  if (menue.classList.contains('hidden')) {
    menue.classList.remove('hidden');
    cross.classList.remove('hidden');
  } else {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
  }
};
hamburger.addEventListener('click', () => toggleMenue());
cross.addEventListener('click', () => toggleMenue());

document.querySelectorAll('.menue-items').forEach((n) => n.addEventListener('click', () => {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
}));

// 10:39
// index.html
// <ul class="menue-popup hidden">
//   <li class="menue-items"><a href="#portfolio" title="navbar link portfolio">Portfolio</a></li>
//   <li class="menue-items"><a href="#about" title="navbar link About">About</a></li>
//   <li class="menue-items"><a href="#contact" title="navbar link Contact">Contact</a></li>
// </ul>
// 10:40
// then add the following ids
// id="portfolio" line 52
// id="about" line 145
// and
// id="contact" line 182
