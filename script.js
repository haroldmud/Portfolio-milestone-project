const hamburger = document.getElementById('link_menu');
const navBar = document.getElementById('nav_bar');
const title = document.getElementById('logo');
const webLink = document.getElementById('portfolio');
const popupWindow = document.getElementById('submit_1');
const popupWindo = document.getElementById('submit_2');
const popupWind = document.getElementById('submit_3');
const popupWin = document.getElementById('submit_4');

function changeIcon(icon) {
  icon.classList.toggle('fa-times');
}

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('show');
  title.style.opacity = '0';
});

popupWindow.addEventListener('click', () => {
  document.getElementById('popup').classList.toggle('active');
});

popupWindo.addEventListener('click', () => {
  document.getElementById('popup').classList.toggle('active');
});

popupWind.addEventListener('click', () => {
  document.getElementById('popup').classList.toggle('active');
});

popupWin.addEventListener('click', () => {
  document.getElementById('popup').classList.toggle('active');
});

function hideWindow() {
  document.querySelector('#popup').style.display = 'none';
}

function fun() {
  location.reload();
}