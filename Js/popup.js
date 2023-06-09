import popupdata from './data.js';

const submit = document.querySelectorAll('.see-project');
const popopcontainer = document.querySelector('.popup-container');
const popupwindow = (data) => {
  popopcontainer.innerHTML = ` <div class="container-popup">
   <div class="content">
   <div class="no idea">
       <div class="header-cross">
     <h2 class="content-header margin-none">${data.projectname}</h2>
     <p class="cross-popup"> <img class="cross" src="./images/cross.png" alt=""></p>
   </div>
   <div class="pop-header-tech">
     <ul class="specification margin-none margin-bottom">
         <li class="name">${data.frame[0]}</li>
         <li class="skills"><img src="${data.dot}" alt="">
         <p>${data.frame[1]}</p></li> 
         <li class="year"><img src="${data.dot}" alt="">
           <p>${data.frame[2]}</p></li>
     </ul>
   </div>
   </div>
     <div class="image">
       <img class="pop-image" src="${data.popimage}" alt="">
   </div>
 <div class="para-links">
   <div class="popup-paragraph">
   <p class="content-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi delectus tempora voluptate pariatur voluptas aut voluptatibus, alias eaque distinctio optio, at eligendi tenetur ab animi ut! r  </p>
 </div>
 <div class="links-buttons-underline">
   <ul class="technologies pop-technoligies">
       <li class="html technologies1">Html</li>
       <li class="Css technologies1">Css</li>
       <li class="javascript technologies1">Javascript</li>
       <li class="pophidden hidden technologies1">Github</li>
       <li class="pophidden  hidden technologies1">Ruby</li>
       <li class="pophidden hidden technologies1">Bootstrap</li>
   </ul>
   <div class="underline"></div>
   <div class="pop-button">
     <button class="see-project pop-project"><a href="#">
       <div class="live">
       <span class="text">See Live</span>
       <img src="${data.livelogo}" alt="logo" class="button-logo">
     </a></button>
     <button class="see-project pop-project"><a href="#">
       <span class="text">See Source</span>
       <img src="${data.sourcelogo}" alt="logo" class="button-logo">
     </a></button>
     </div>
   </div>
   `;
  const crosspopup = document.querySelectorAll('.cross-popup');
  popopcontainer.classList.remove('hidden');
  crosspopup.forEach((cross) => {
    cross.addEventListener('click', () => {
      popopcontainer.classList.add('hidden');
    });
  });
};
submit.forEach((button) => {
  button.addEventListener('click', (f) => {
    const { index } = f.target.dataset;
    popupwindow(popupdata[index]);
  });
});
