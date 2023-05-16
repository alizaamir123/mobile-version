const hamburger = document.querySelector('#hamburger-button');
const menue = document.querySelector('.menue-popup');
const cross = document.querySelector('#cross-button');

// hamburger.addEventListener('click', () => {
//     if(menue.classList.contains('hidden')){
//         menue.classList.remove('hidden');
//         cross.classList.remove('hidden');
//     } else {
//         menue.classList.add('hidden');
//         cross.classList.add('hidden');
//     }
// })

// cross.addEventListener('click', () => {
//     if(menue.classList.contains('hidden')){
//         menue.classList.remove('hidden');
//         cross.classList.remove('hidden');
//     } else {
//         menue.classList.add('hidden');
//         cross.classList.add('hidden');
//     }
// })

hamburger.addEventListener('click',() => toggleMenue())
cross.addEventListener('click', () => toggleMenue())

const toggleMenue = () => {
    if(menue.classList.contains('hidden')){
        menue.classList.remove('hidden');
        cross.classList.remove('hidden');
    } else {
        menue.classList.add('hidden');
        cross.classList.add('hidden');
    }
}