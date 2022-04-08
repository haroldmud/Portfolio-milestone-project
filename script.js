const CardsContainer = document.getElementById('CardsContainer');
const ShowPopUpContainer = document.getElementById('popup');
const hamburger = document.getElementById('link_menu');
const navBar = document.getElementById('nav_bar');
const title = document.getElementById('logo');
const webLink = document.getElementById('portfolio');

function changeIcon(icon) {
  icon.classList.toggle('fa-times');
}

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('show');
  title.style.opacity = '0';
});

function fun() {
  location.reload();
}

const temp = document.createElement('popTemplate');
ShowPopUpContainer.innerHTML = `
 
  <div class="window">
      <div class="multi">
          <h2 class="post">Multi post stories</h2>
          <button class="btsn" onclick="hideWindow()" ><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div>
          <img class="brouillon1" src="./icon/brouillon1.jpg" alt="">
          <p class="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
               <span class="prgph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</span>
          </p>
          <nav>
              <ul class="Navlisted">
                  <li class="navlist"><a class="href" href="#">html</a></li>
                  <li class="navlist"><a class="href" href="#">Ruby on rails</a></li>
                  <li class="navlist"><a class="href" id="hr" href="#">css</a></li>
                  <li class="navlist" id="li" ><a class="href" href="#">Github</a></li>
              </ul>
          </nav>
      </div>
      <div class="submitBtns">
          <div id="btn" class="btsn">
              <a class="href" href="">See Live</a>
              <img class="icon" src="./icon/liveIcon.png" alt="live icon">
          </div>
          <div id="btsn" class="btsn">
              <a class="href" href="">See source</a>
              <img class="icon" src="./icon/gitIcon.png" alt="">
          </div>
      </div>
  </div>

  `;
function hideWindow() {
  document.querySelector('#popup').style.display = 'none';
  document.querySelector('.head_center').style.filter = 'none';
  document.querySelector('.recent_work').style.filter = 'none';
  document.querySelector('.cross').style.filter = 'none';
  document.querySelector('.deep_footer').style.filter = 'none';
}

function showUpWindow() {
  document.querySelector('#popup').style.display = 'block';
  document.querySelector('.head_center').style.filter = 'blur(8px)';
  document.querySelector('.recent_work').style.filter = 'blur(8px)';
  document.querySelector('.cross').style.filter = 'blur(8px)';
  document.querySelector('.deep_footer').style.filter = 'blur(8px)';
}

const projectsCards = [
  {
    cardText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printers took a standard dummy text.',
    title: 'Multi-post story',
    cardImages: 'icon/brouillon1.jpg',
    position: false,
    id: 'submit_1',
  },

  {
    cardText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printers took a standard dummy text.',
    title: 'Multi-post story',
    cardImages: 'icon/brouillon1.jpg',
    position: true,
    id: 'submit_2',
  },

  {
    cardText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printers took a standard dummy text.',
    title: 'Multi-post story',
    cardImages: 'icon/brouillon1.jpg',
    position: false,
    id: 'submit_3',
  },

  {
    cardText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printers took a standard dummy text.',
    title: 'Multi-post story',
    cardImages: 'icon/brouillon1.jpg',
    position: true,
    id: 'submit_4',
  },
];

const projectsGenerator = projectsCards.map((card, index) => `
<div class="${card.position ? 'first_grid' : 'second_grid'}">
<div class="grid_child">
  <h2 class="title_1">${card.title}</h2>
  <p>${card.cardText}</p>

  <nav class="navigation_bar1">
    <ul>
      <li class="nav_1"><a href="">Css</a></li>
      <li class="nav_2"><a href="">Html</a></li>
      <li class="nav_3"><a href="">Bootstrap</a></li>
      <li class="nav_4"><a href="">Ruby</a></li>
    </ul>
  </nav>
  <button class="submit_1" id="${card.id}" onclick="showUpWindow()">See Project</button>
</div>
<div><img src="${card.cardImages}" class="card_1" alt="" /></div>
</div>  


`).join('');

CardsContainer.innerHTML += projectsGenerator;