const menue = document.querySelector('.menue-popup');
const cross = document.querySelector('#cross-button');
const hamburger = document.querySelector('#hamburger-button');
const submit = document.querySelectorAll(".see-project");
const popshow = document.querySelector(".popup-container");
const hidePopup = document.querySelector(".cross-popup");
const form = document.querySelector(".form");
errorMsg = document.querySelector(".flex");
email = document.querySelector("#email");
const toggleMenue = () => {
  if (menue.classList.contains('hidden')) {
    menue.classList.remove('hidden');
    cross.classList.remove('hidden');
  } else {
    menue.classList.add('hidden');
    cross.classList.add('hidden');
  }
};
const togglePopup = () => {
  if (popshow.classList.contains("hidden")) {
    popshow.classList.remove("hidden");
  } else {
    popshow.classList.add("hidden");
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
submit.forEach((button) => {
  button.addEventListener("click", togglePopup);
});
hidePopup.addEventListener("click", togglePopup);
form.addEventListener("submit", (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Email must be in Lowercase";
  } else {
    errorMsg.style.display = "none";
  }
});
